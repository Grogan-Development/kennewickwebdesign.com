const defaultSiteUrl = "https://kennewickwebdesign.com";

function normalizeSiteUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const site = {
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl),
  name: "Kennewick Web Design",
  legalName: "Grogan Development Group LLC",
  founderName: "Zack Grogan",
  email: "info@grogan.dev",
  phoneDisplay: "(509) 426-3172",
  phoneHref: "+15094263172",
  city: "Kennewick",
  state: "WA",
  postalCode: "99336",
  serviceArea: ["Kennewick", "Pasco", "Richland", "West Richland", "West Pasco"],
  tagline:
    "Custom websites, SEO foundations, and ongoing support for businesses across the Tri-Cities.",
  primaryCtaLabel: "Book a Consultation",
  secondaryCtaLabel: "View Pricing",
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalizedPath}`;
}
