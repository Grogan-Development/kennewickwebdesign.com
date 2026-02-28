import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/web-design-for-contractors" },
    title: "Web Design for Contractors — Kennewick & Tri-Cities",
    description:
        "Lead-generating websites for Kennewick contractors. Roofers, electricians, plumbers, HVAC — built by a local expert who understands your business.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✓</span>
);

const CrossIcon = () => (
    <span style={{ color: "#ef4444", marginRight: 8, fontWeight: "bold" }}>✗</span>
);

export default function ContractorsPage() {
    const painPoints = [
        "Your website looks outdated and doesn't reflect the quality of your work",
        "You're relying on word-of-mouth but need a steady stream of leads",
        "Competitors are ranking above you on Google for 'contractor Kennewick'",
        "Your site isn't mobile-friendly and customers can't call with one tap",
        "You paid a big agency but never saw results",
    ];

    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Contractors</span>
                    <h1 className="mt-4">
                        Web Design for Kennewick Contractors That Generates Leads 24/7
                    </h1>
                    <p>
                        Your website should be your hardest-working employee. We build sites
                        that get your phone ringing with qualified Tri-Cities leads.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div className="card" style={{ background: "rgba(239, 68, 68, 0.05)", borderColor: "rgba(239, 68, 68, 0.2)" }}>
                            <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Sound Familiar?</h2>
                            <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none" }}>
                                {painPoints.map((p, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            padding: "16px 0",
                                            borderBottom: "1px solid rgba(239, 68, 68, 0.1)",
                                            display: "flex",
                                            color: "var(--color-text-main)",
                                        }}
                                    >
                                        <CrossIcon /> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card" style={{ background: "rgba(16, 185, 129, 0.05)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
                            <h2 style={{ fontSize: "var(--font-size-2xl)" }}>How We Fix It</h2>
                            <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "16px 0", borderBottom: "1px solid rgba(16, 185, 129, 0.1)", display: "flex" }}>
                                    <CheckIcon /> Professional, modern design that builds instant trust
                                </li>
                                <li style={{ padding: "16px 0", borderBottom: "1px solid rgba(16, 185, 129, 0.1)", display: "flex" }}>
                                    <CheckIcon /> SEO-optimized for &quot;roofer Kennewick&quot;, &quot;electrician near me&quot;, etc.
                                </li>
                                <li style={{ padding: "16px 0", borderBottom: "1px solid rgba(16, 185, 129, 0.1)", display: "flex" }}>
                                    <CheckIcon /> Click-to-call buttons and lead forms on every page
                                </li>
                                <li style={{ padding: "16px 0", borderBottom: "1px solid rgba(16, 185, 129, 0.1)", display: "flex" }}>
                                    <CheckIcon /> Photo gallery showcasing your best projects
                                </li>
                                <li style={{ padding: "16px 0", display: "flex" }}>
                                    <CheckIcon /> Google Business Profile optimization included
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Get More Contractor Leads?</h2>
                    <p>Tell us about your contracting business and we&apos;ll send you a free site audit.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Contractor Site Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}
