import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/services" },
    title: "Services",
    description:
        "Website design, local SEO, managed hosting, and e-commerce support for Tri-Cities businesses that need a clearer digital presence.",
};

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
