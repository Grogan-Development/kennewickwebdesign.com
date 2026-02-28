/* ──────────────────────────────────────────────
   SITE DATA — grogan.dev
   ────────────────────────────────────────────── */

export const siteConfig = {
    name: "Kennewick Web Design",
    domain: "grogan.dev",
    tagline: "Kennewick's Local Web Expert",
    phone: "(509) 426-3172",
    email: "info@grogan.dev",
    address: {
        street: "Kennewick, WA",
        city: "Kennewick",
        state: "WA",
        zip: "99336",
    },
    socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        google: "#",
    },
};

/* ──────────────────────────────────────────────
   FAQs
   ────────────────────────────────────────────── */

export interface FAQ {
    question: string;
    answer: string;
}

export const pricingFAQs: FAQ[] = [
    {
        question: "What's included in every package?",
        answer:
            "Every package includes a custom-designed, mobile-responsive website, basic on-page SEO, SSL security, and a 30-day post-launch support window. We never use templates — everything is built from scratch for your business.",
    },
    {
        question: "How long does a project take?",
        answer:
            "Starter sites are typically delivered in 2–3 weeks. Growth packages take 3–5 weeks. Premium projects with e-commerce or booking systems take 5–8 weeks. We keep you updated at every step.",
    },
    {
        question: "Do I need to pay everything upfront?",
        answer:
            "No. We split payments into two milestones: 50% to start and 50% on launch. For Premium packages we can arrange three payments.",
    },
    {
        question: "What does Managed Hosting include?",
        answer:
            "Our Managed Hosting is an ongoing monthly subscription that covers premium hosting, SSL security, uptime monitoring, daily backups, security updates, and bot detection. Think of it as fully-managed infrastructure for your website, similar to Shopify or Squarespace but with personal, local support.",
    },
    {
        question: "Can I upgrade my package later?",
        answer:
            "Absolutely. Many clients start with a Starter site and upgrade to Growth when they're ready for serious SEO and lead generation. We'll credit what you've already paid.",
    },
    {
        question: "Do you work with businesses outside the Tri-Cities?",
        answer:
            "Our sweet spot is Kennewick, Pasco, Richland, and the surrounding area because we can meet in person and take real local photos. But we're happy to work with businesses across Washington state remotely too.",
    },
];

/* ──────────────────────────────────────────────
   SERVICES
   ────────────────────────────────────────────── */

export interface ServiceItem {
    title: string;
    slug: string;
    icon: string;
    shortDescription: string;
    description: string;
}

export const services: ServiceItem[] = [
    {
        title: "Web Design & Development",
        slug: "web-design",
        icon: "",
        shortDescription:
            "Custom, mobile-first websites built to convert visitors into customers.",
        description:
            "We build fast, beautiful websites that are designed around one goal: turning visitors into paying customers. Every site is custom — no cookie-cutter templates.",
    },
    {
        title: "Local SEO",
        slug: "local-seo",
        icon: "",
        shortDescription:
            "Get found on Google when Kennewick & Tri-Cities customers search for you.",
        description:
            "We optimize your website, Google Business Profile, and local citations so you show up when nearby customers search for what you offer.",
    },
    {
        title: "Managed Hosting",
        slug: "managed-hosting",
        icon: "",
        shortDescription:
            "Premium hosting, security patches, bot detection, and weekly backups.",
        description:
            "We provide fully-managed hosting subscriptions starting at $25/mo. We handle server maintenance, security monitoring, and updates so you never have to worry about your site going offline.",
    },
    {
        title: "E-Commerce & Booking",
        slug: "ecommerce",
        icon: "",
        shortDescription:
            "Sell products or let customers book appointments directly on your site.",
        description:
            "Whether you need a full online store or a simple appointment booking system, we integrate the right tools seamlessly into your website.",
    },
];

/* ──────────────────────────────────────────────
   INDUSTRIES
   ────────────────────────────────────────────── */

export interface IndustryItem {
    title: string;
    slug: string;
    image: string;
    description: string;
}

export const industries: IndustryItem[] = [
    {
        title: "Contractors & Home Services",
        slug: "web-design-for-contractors",
        image: "/images/industries/industry_contractors.png",
        description:
            "Lead-generating websites for roofers, electricians, plumbers, HVAC, and general contractors in the Tri-Cities.",
    },
    {
        title: "Wineries & Tasting Rooms",
        slug: "winery-website-design",
        image: "/images/industries/industry_wineries.png",
        description:
            "Elegant sites with reservation systems, event calendars, and wine club signups for Tri-Cities wineries.",
    },
    {
        title: "Healthcare & Dental",
        slug: "medical-website-design",
        image: "/images/industries/industry_healthcare.png",
        description:
            "Secure, patient-friendly websites with online booking, patient portals, and insurance information for clinics and practices.",
    },
    {
        title: "Restaurants & Food Service",
        slug: "restaurants",
        image: "/images/industries/industry_restaurants.png",
        description:
            "Mobile-first sites with online ordering, menus, and Google Maps integration for local restaurants.",
    },
    {
        title: "Real Estate",
        slug: "real-estate",
        image: "/images/industries/industry_realestate.png",
        description:
            "Property showcase sites with IDX integration, lead capture, and neighborhood guides for Tri-Cities agents.",
    },
    {
        title: "Professional Services",
        slug: "professional-services",
        image: "/images/industries/industry_professionals.png",
        description:
            "Clean, professional websites for law firms, accounting practices, and consultants in the Tri-Cities area.",
    },
];

/* ──────────────────────────────────────────────
   PRICING & HOSTING PLANS
   ────────────────────────────────────────────── */

export interface ManagedHostingPlan {
    name: string;
    price: string;
    priceNote: string;
    popular: boolean;
    features: string[];
}

export const managedHostingPlans: ManagedHostingPlan[] = [
    {
        name: "Essential",
        price: "$25",
        priceNote: "/ month",
        popular: false,
        features: [
            "Premium Local Hosting",
            "SSL Certificate",
            "Uptime Monitoring",
            "Core Security Updates",
        ],
    },
    {
        name: "Professional",
        price: "$50",
        priceNote: "/ month",
        popular: true,
        features: [
            "Everything in Essential",
            "Bot Detection & Intervention",
            "Weekly Off-Site Backups",
            "Monthly Performance Reports",
        ],
    },
    {
        name: "Business",
        price: "$99",
        priceNote: "/ month",
        popular: false,
        features: [
            "Everything in Professional",
            "Priority Support",
            "Analytics Monitoring",
            "Content Updates (2 hrs/mo)",
        ],
    },
];

export interface PricingPackage {
    name: string;
    price: string;
    priceNote: string;
    positioning: string;
    popular: boolean;
    features: string[];
    idealFor: string;
    timeline: string;
}

export const pricingPackages: PricingPackage[] = [
    {
        name: "Starter",
        price: "$750",
        priceNote: "one-time",
        positioning: "Everything you need to get online and start generating leads.",
        popular: false,
        features: [
            "3–5 page custom website",
            "Clean, professional template-based design",
            "Mobile-responsive development",
            "Basic contact form",
            "Basic on-page SEO",
            "Lighthouse performance optimization",
            "SSL security certificate",
            "14-day post-launch support",
        ],
        idealFor: "New businesses or landing pages needing a professional web presence fast.",
        timeline: "1–2 weeks",
    },
    {
        name: "Growth",
        price: "$1,250",
        priceNote: "one-time",
        positioning: "For businesses ready to dominate local search AND generate serious leads.",
        popular: true,
        features: [
            "5–8 page custom website",
            "Custom design & unique branding",
            "Advanced lead-capture forms",
            "Full local SEO + Google Business Profile",
            "Blog setup & foundation",
            "Core Web Vitals + advanced speed tuning",
            "Google Analytics setup",
            "30-day post-launch support",
        ],
        idealFor: "Growing businesses that want to expand their online presence and lock down local SEO.",
        timeline: "2–4 weeks",
    },
    {
        name: "Premium",
        price: "$2,500",
        priceNote: "one-time",
        positioning:
            "The full package — custom design, SEO strategy, and booking capabilities.",
        popular: false,
        features: [
            "8+ page custom website",
            "Full custom design with animations",
            "Multi-step interactive forms",
            "Advanced SEO + content strategy",
            "Blog setup with 2 starter posts",
            "E-commerce or booking system setup",
            "Premium performance audit",
            "60-day post-launch support + care plan option",
        ],
        idealFor:
            "Established businesses that want a complete, done-for-you web solution.",
        timeline: "4–6 weeks",
    },
];
