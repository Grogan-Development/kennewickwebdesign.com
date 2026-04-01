import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/services" },
    title: "Services",
    description:
        "Website design, local SEO, managed hosting, and e-commerce support for Tri-Cities businesses that need a clearer digital presence.",
    openGraph: {
        url: "/services",
        title: "Services | Kennewick Web Design",
        description:
            "Website design, local SEO, managed hosting, and e-commerce support for Tri-Cities businesses that need a clearer digital presence.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Kennewick Web Design",
        description:
            "Website design, local SEO, managed hosting, and e-commerce support for Tri-Cities businesses.",
    },
};

function ServiceIcon({ slug }: { slug: string }) {
    const svgProps = {
        width: 28,
        height: 28,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    switch (slug) {
        case "web-design":
            return (
                <svg {...svgProps}>
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                </svg>
            );
        case "local-seo":
            return (
                <svg {...svgProps}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                </svg>
            );
        case "managed-hosting":
            return (
                <svg {...svgProps}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            );
        case "ecommerce":
            return (
                <svg {...svgProps}>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            );
        default:
            return (
                <svg {...svgProps}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            );
    }
}

export default function ServicesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Our Services</span>
                    <h1 className="mt-4">Services built around trust, clarity, and lead flow.</h1>
                    <p>
                        The work centers on the parts that usually matter most for local businesses:
                        how the site looks, what it says, how easy it is to use, and whether it gives people a reason to contact you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        {services.map((service, i) => (
                            <div className="card" key={i} style={{ display: "flex", flexDirection: "column" }}>
                                <div className={`service-card-icon ${i === 0 ? "accent-bg" : "primary-bg"}`}>
                                    <ServiceIcon slug={service.slug} />
                                </div>
                                <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>
                                    {service.title}
                                </h2>
                                <p className="card-text" style={{ marginBottom: 24, flexGrow: 1 }}>
                                    {service.description}
                                </p>
                                <Link href={`/services/${service.slug}`} className="btn btn-outline">
                                    View Service Details <span className="icon-arrow">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to upgrade your web presence?</h2>
                    <p>Tell us what is not working today and we&apos;ll recommend the most sensible next step.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                        </Link>
                        <Link href="/pricing" className="btn btn-outline btn-lg">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
