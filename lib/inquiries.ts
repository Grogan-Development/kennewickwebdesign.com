export type InquirySource = "contact" | "project";

export interface InquiryPayload {
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

export interface ManualContactDetails {
  email: string;
  phone: string;
  mailto: string;
}

export interface InquiryApiResponse {
  ok: boolean;
  message?: string;
  manualContact?: ManualContactDetails;
}

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<InquiryApiResponse> {
  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response
    .json()
    .catch(() => ({ ok: false, message: "Unexpected response from the server." }))) as InquiryApiResponse;

  if (!response.ok && !data.message) {
    return {
      ok: false,
      message: "We could not submit your inquiry. Please try again.",
      manualContact: data.manualContact,
    };
  }

  return data;
}
