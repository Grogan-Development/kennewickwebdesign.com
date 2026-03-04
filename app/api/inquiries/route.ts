import { appendFile } from "node:fs/promises";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type InquirySource = "contact" | "project";

interface InquiryPayload {
  source: InquirySource;
  name: string;
  email: string;
  phone?: string;
  business?: string;
  website?: string;
  message?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  plan?: string;
  page?: string;
  referrer?: string;
  company?: string;
}

const deliveryUnavailableMessage =
  "Automatic delivery is not configured yet. Use the direct email fallback below.";

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toTitleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatInquiry(payload: InquiryPayload) {
  const subjectBase =
    payload.source === "project" ? "New project inquiry" : "New contact inquiry";
  const subject = `${site.name}: ${subjectBase} from ${payload.name}`;

  const lines = [
    `Source: ${payload.source}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.business ? `Business: ${payload.business}` : "",
    payload.website ? `Website: ${payload.website}` : "",
    payload.plan ? `Selected Plan: ${payload.plan}` : "",
    payload.projectType ? `Project Type: ${toTitleCase(payload.projectType)}` : "",
    payload.budget ? `Budget: ${toTitleCase(payload.budget)}` : "",
    payload.timeline ? `Timeline: ${toTitleCase(payload.timeline)}` : "",
    payload.page ? `Page: ${payload.page}` : "",
    payload.referrer ? `Referrer: ${payload.referrer}` : "",
    "",
    "Message:",
    payload.message || "",
  ].filter(Boolean);

  return {
    subject,
    text: lines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">${subject}</h2>
        <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${lines.join("\n")}</pre>
      </div>
    `,
  };
}

function buildMailto(payload: InquiryPayload) {
  const { subject, text } = formatInquiry(payload);
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

async function deliverViaWebhook(payload: InquiryPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const content = formatInquiry(payload);
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      ...content,
      receivedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }

  return true;
}

async function deliverViaResend(payload: InquiryPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendTo = process.env.CONTACT_TO_EMAIL;
  const resendFrom = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !resendTo || !resendFrom) return false;

  const content = formatInquiry(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [resendTo],
      reply_to: payload.email,
      subject: content.subject,
      text: content.text,
      html: content.html,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Resend delivery failed with status ${response.status}`);
  }

  return true;
}

async function logLocally(payload: InquiryPayload) {
  const logPath = "/tmp/kennewick-web-design-inquiries.ndjson";
  await appendFile(
    logPath,
    `${JSON.stringify({ ...payload, receivedAt: new Date().toISOString() })}\n`,
    "utf8",
  );
}

function manualContactResponse(payload: InquiryPayload, status = 503, message = deliveryUnavailableMessage) {
  return NextResponse.json(
    {
      ok: false,
      message,
      manualContact: {
        email: site.email,
        phone: site.phoneDisplay,
        mailto: buildMailto(payload),
      },
    },
    { status },
  );
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const source = normalize(payload.source) === "project" ? "project" : "contact";
  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const message = normalize(payload.message);
  const company = normalize(payload.company);

  const cleanedPayload: InquiryPayload = {
    source,
    name,
    email,
    phone: normalize(payload.phone),
    business: normalize(payload.business),
    website: normalize(payload.website),
    message,
    projectType: normalize(payload.projectType),
    budget: normalize(payload.budget),
    timeline: normalize(payload.timeline),
    plan: normalize(payload.plan),
    page: normalize(payload.page),
    referrer: normalize(payload.referrer),
    company,
  };

  if (company) {
    return NextResponse.json({ ok: true, message: "Received." });
  }

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "A valid name and email address are required." },
      { status: 400 },
    );
  }

  if (source === "contact" && !message) {
    return NextResponse.json(
      { ok: false, message: "Please include a short description of your project or question." },
      { status: 400 },
    );
  }

  if (source === "project" && !message) {
    return NextResponse.json(
      { ok: false, message: "Please describe the project before submitting." },
      { status: 400 },
    );
  }

  try {
    const delivered =
      (await deliverViaWebhook(cleanedPayload)) ||
      (await deliverViaResend(cleanedPayload));

    if (!delivered && process.env.NODE_ENV !== "production") {
      await logLocally(cleanedPayload);
      return NextResponse.json({
        ok: true,
        message: "Inquiry captured locally for development.",
      });
    }

    if (!delivered) {
      return manualContactResponse(cleanedPayload);
    }

    return NextResponse.json({
      ok: true,
      message: "Your inquiry was delivered successfully.",
    });
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return manualContactResponse(
      cleanedPayload,
      502,
      "We could not deliver your inquiry automatically. Use the email fallback below.",
    );
  }
}
