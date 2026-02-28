import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/services/web-design" },
    title: "Custom Web Design",
    description:
        "Custom, fast, lead-generating web design for Kennewick and Tri-Cities businesses.",
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
                    <h1 className="mt-4">Websites That Convert Visitors Into Customers</h1>
                    <p>
                        Your website is your hardest working employee. We build custom, fast,
                        mobile-optimized sites that sell your services 24/7.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Not Just a Digital Brochure</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Most local business websites are just expensive digital brochures.
                                They look okay, but they don&apos;t convince visitors to pick up the
                                phone or fill out a form.
                            </p>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                We engineer our sites differently. Every pixel is designed with
                                one goal in mind: generating qualified leads for your business.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What&apos;s Included:</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Custom Premium Design (No generic templates)
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Mobile-First & Responsive
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Blazing Fast Load Times (Sub 2-seconds)
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Technical SEO Foundation
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Lead Capture Forms & Click-to-Call
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "3rem" }}>
                            <div style={{ textAlign: "center", marginBottom: 32 }}>
                                <span className="local-badge">Pricing Starts At</span>
                                <div style={{ fontSize: "var(--font-size-5xl)", fontWeight: 800, color: "var(--color-white)", marginTop: 16 }}>$1,997</div>
                                <p style={{ color: "var(--color-text-muted)", marginTop: 8 }}>One-time investment</p>
                            </div>
                            <p className="card-text" style={{ textAlign: "center", marginBottom: 32 }}>
                                We believe in transparent pricing. A professional, 5-page lead-generating site starts at just under $2k.
                            </p>
                            <div style={{ textAlign: "center" }}>
                                <Link href="/pricing" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                                    View Detailed Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready For a New Website?</h2>
                    <p>Get a free homepage mockup before you sign a contract.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Strategy Call <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
