import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grogan.dev"),
  title: {
    default: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    template: "%s | Kennewick Web Design",
  },
  description:
    "Custom websites for Kennewick & Tri-Cities businesses. Web design, local SEO, and ongoing care plans from your local Kennewick neighbor. Transparent pricing, no templates.",
  keywords: [
    "web design Kennewick",
    "Tri-Cities website design",
    "web design for contractors Kennewick",
    "Kennewick web developer",
    "local SEO Tri-Cities",
    "website care plans",
    "Kennewick web design",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kennewick Web Design",
    title: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    description:
      "Custom websites for Kennewick & Tri-Cities businesses. Built by your local Kennewick neighbor. Transparent pricing, no templates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* JSON-LD Structured Data */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Greyson Grogan | Tri-Cities Web Design",
  "image": "https://grogan.dev/og-image.jpg",
  "url": "https://grogan.dev",
  "telephone": "+15094263172",
  "email": "info@grogan.dev",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Kennewick",
    "addressRegion": "WA",
    "postalCode": "99336",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.2114,
    "longitude": -119.1373
  },
  "areaServed": ["Kennewick", "Pasco", "Richland", "West Richland"],
  "sameAs": [
    "https://github.com/ggrogan"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Design and Development",
  provider: {
    "@type": "LocalBusiness",
    name: "Kennewick Web Design",
  },
  areaServed: {
    "@type": "Place",
    name: "Tri-Cities, Washington",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Starter Package",
          description:
            "Custom one-page website, mobile-responsive, basic on-page SEO, 30-day support",
        },
        price: "750",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Package",
          description:
            "Multi-page website, full local SEO setup, Google Business Profile optimization, lead funnels",
        },
        price: "1250",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium Package",
          description:
            "E-commerce/booking, 12-month care plan, advanced analytics, priority support",
        },
        price: "2500",
        priceCurrency: "USD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-jakarta: ${jakarta.style.fontFamily};
              --font-outfit: ${outfit.style.fontFamily};
            }
          `
        }} />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
