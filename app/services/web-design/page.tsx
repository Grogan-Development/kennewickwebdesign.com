import type { Metadata } from "next";
import Link from "next/link";
import { pricingPackages } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/services/web-design" },
    title: "Web Design",
    description:
        "Custom web design for Tri-Cities businesses that need a more credible website, stronger messaging, and a cleaner path to inquiry.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function WebDesignServicePage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Web Design</span>
                    <h1 className="mt-4">Web design for businesses that need a stronger first impression.</h1>
                    <p>
                        The goal is a site that explains what you do clearly, feels credible on every screen size,
                        and makes it easier for the right visitor to contact you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>More than a digital brochure</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                A local business site needs to do a few things well: explain the offer,
                                establish trust fast, work on mobile, and make contacting you simple.
                                If it misses those basics, it becomes dead weight.
                            </p>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                This service focuses on the fundamentals first: structure, copy, hierarchy,
                                performance, and a page plan that supports your actual business goals.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What&apos;s Included:</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Custom page structure and design direction
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Mobile-First & Responsive
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Performance-focused build and optimization
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> On-page SEO foundation
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Contact flows, click-to-call, and 30-day support
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "3rem" }}>
                            <div style={{ textAlign: "center", marginBottom: 32 }}>
                                <span className="local-badge">Pricing Starts At</span>
                                <div style={{ fontSize: "var(--font-size-5xl)", fontWeight: 800, color: "var(--color-white)", marginTop: 16 }}>{pricingPackages[0]?.price ?? "$750"}</div>
                                <p style={{ color: "var(--color-text-muted)", marginTop: 8 }}>One-time investment</p>
                            </div>
                            <p className="card-text" style={{ textAlign: "center", marginBottom: 32 }}>
                                Smaller brochure-style sites, landing pages, and straightforward lead-generation builds start at the Starter tier.
                            </p>
                            <div style={{ display: "grid", gap: 12 }}>
                                <Link href="/pricing" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                                    View Detailed Pricing
                                </Link>
                                <Link href="/portfolio" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready for a better website?</h2>
                    <p>Tell us about the business and we&apos;ll recommend the right scope, timeline, and package.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
