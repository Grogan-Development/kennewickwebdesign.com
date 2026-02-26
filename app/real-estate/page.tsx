import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/real-estate" },
    title: "Real Estate Website Design — Kennewick / Tri-Cities",
    description:
        "Premium websites for Tri-Cities real estate agents and brokerages. IDX integration, neighborhood guides, and lead capture features.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function RealEstatePage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Real Estate</span>
                    <h1 className="mt-4">
                        Real Estate Website Design
                    </h1>
                    <p>
                        High-performance websites that capture leads, showcase properties, and position you as the local Tri-Cities expert.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Stand Out in a Crowded Market</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Buyers and sellers want to work with agents who look professional and know the local market. Provide tools like IDX search and neighborhood guides wrapped in a stunning, modern design to win more listings.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What You Get</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> IDX / MLS search integration
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Lead capture & home valuation forms
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Custom Tri-Cities neighborhood guides
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Stunning property showcases & video embeds
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Mobile-first responsive design
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>Built to Convert</h3>
                                <p className="card-text">Your website shouldn't just be an online business card. It needs to generate leads. We combine beautiful design with strategic lead capture elements specifically for real estate professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Grow Your Business?</h2>
                    <p>Let&apos;s build a digital presence that wins more listings.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Web Strategy Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
