import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { absoluteUrl, site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: {
    default: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    template: "%s | Kennewick Web Design",
  },
  description:
    "Custom websites for businesses in Kennewick, Pasco, and Richland. Clear pricing, direct communication, and sites built to help visitors call, book, or request a quote.",
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
      "Custom websites for businesses in Kennewick, Pasco, and Richland. Clear pricing, direct communication, and practical sites built to convert visitors into inquiries.",
    url: site.url,
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Kennewick Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    description:
      "Custom websites for businesses in Kennewick, Pasco, and Richland. Clear pricing and direct communication from a local builder.",
    images: [absoluteUrl("/og-image.png")],
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
  "name": `${site.name} by ${site.founderName}`,
  "image": absoluteUrl("/og-image.png"),
  "url": site.url,
  "telephone": site.phoneHref,
  "email": site.email,
  "priceRange": "$750-$2,500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": site.city,
    "addressRegion": site.state,
    "postalCode": site.postalCode,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.2114,
    "longitude": -119.1373
  },
  "areaServed": site.serviceArea,
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
    name: site.name,
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
            "3 to 5 page custom website with mobile-responsive development, on-page SEO basics, and 30-day post-launch support",
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
            "5 to 8 page custom website with local SEO setup, Google Business Profile optimization, and stronger conversion paths",
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
            "Expanded custom website with booking or ecommerce setup, advanced SEO planning, and extended launch support",
        },
        price: "2500",
        priceCurrency: "USD",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
