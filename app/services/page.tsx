import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/services" },
    title: "Web Design & Local SEO Services",
    description:
        "Premium web design, local SEO, website care plans, and e-commerce solutions for Tri-Cities businesses.",
};

export default function ServicesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Our Services</span>
                    <h1 className="mt-4">Web Solutions That Drive Growth</h1>
                    <p>
                        Everything you need to dominate your local market online — from
                        high-converting design to local SEO that puts you on page one.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        {services.map((service, i) => (
                            <div className="card" key={i} style={{ display: "flex", flexDirection: "column" }}>
                                <div className="card-icon">{service.icon}</div>
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
                    <p>Tell us what you need and we&apos;ll build a custom plan for your business.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Audit <span className="icon-arrow">→</span>
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
