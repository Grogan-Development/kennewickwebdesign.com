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

function buildMailto(payload: InquiryPayload) {
  const subject = `${site.name}: New inquiry from ${payload.name}`;
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.business ? `Business: ${payload.business}` : "",
    "",
    "Message:",
    payload.message || "",
  ].filter(Boolean);

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

async function deliverToNotion(payload: InquiryPayload) {
  const notionApiKey = process.env.NOTION_API_KEY;
  const notionDatabaseId = process.env.NOTION_INQUIRIES_DATABASE_ID;

  if (!notionApiKey || !notionDatabaseId) return false;

  const sourceLabel = payload.source === "project" ? "Project" : "Contact";
  const now = new Date().toISOString();

  const properties: Record<string, unknown> = {
    Name: {
      title: [{ text: { content: payload.name } }],
    },
    Email: {
      email: payload.email,
    },
    Source: {
      select: { name: sourceLabel },
    },
    Status: {
      select: { name: "New" },
    },
    "Received At": {
      date: { start: now },
    },
  };

  if (payload.phone) {
    properties.Phone = { phone_number: payload.phone };
  }
  if (payload.business) {
    properties.Business = {
      rich_text: [{ text: { content: payload.business } }],
    };
  }
  if (payload.website) {
    properties.Website = { url: payload.website };
  }
  if (payload.message) {
    properties.Message = {
      rich_text: [{ text: { content: payload.message.slice(0, 2000) } }],
    };
  }
  if (payload.plan) {
    properties.Plan = {
      rich_text: [{ text: { content: payload.plan } }],
    };
  }
  if (payload.projectType) {
    properties["Project Type"] = {
      rich_text: [{ text: { content: toTitleCase(payload.projectType) } }],
    };
  }
  if (payload.budget) {
    properties.Budget = {
      rich_text: [{ text: { content: toTitleCase(payload.budget) } }],
    };
  }
  if (payload.timeline) {
    properties.Timeline = {
      rich_text: [{ text: { content: toTitleCase(payload.timeline) } }],
    };
  }
  if (payload.page) {
    properties.Page = {
      rich_text: [{ text: { content: payload.page } }],
    };
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: notionDatabaseId },
      properties,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Notion delivery failed (${response.status}): ${errorBody}`);
  }

  return true;
}

function manualContactResponse(payload: InquiryPayload, status = 503, message = "Automatic delivery is not configured. Use the direct contact options below.") {
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

  // Honeypot field — bots fill this, real users don't see it
  if (company) {
    return NextResponse.json({ ok: true, message: "Received." });
  }

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "A valid name and email address are required." },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json(
      { ok: false, message: "Please include a short description of your project or question." },
      { status: 400 },
    );
  }

  try {
    const delivered = await deliverToNotion(cleanedPayload);

    if (!delivered) {
      return manualContactResponse(cleanedPayload);
    }

    return NextResponse.json({
      ok: true,
      message: "Your inquiry was received. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return manualContactResponse(
      cleanedPayload,
      502,
      "We could not deliver your inquiry automatically. Use the contact options below.",
    );
  }
}
