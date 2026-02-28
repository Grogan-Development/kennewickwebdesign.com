import type { Metadata } from "next";
import Link from "next/link";
import { managedHostingPlans } from "@/lib/data";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/services/managed-hosting" },
    title: "Managed Hosting Subscriptions — Tri-Cities & Kennewick",
    description:
        "Premium managed hosting starting at $25/mo. We handle server maintenance, security monitoring, and updates so you never have to worry about your site going offline.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function ManagedHostingPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Managed Hosting</span>
                    <h1 className="mt-4">Fully Managed Hosting Subscriptions</h1>
                    <p>
                        Secure, fast, and always up-to-date. Transparent monthly hosting that scales with your business — without the DIY headache.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "var(--spacing-16)" }}>
                        <h2>Why pay for Managed Hosting?</h2>
                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-lg)", marginTop: "var(--spacing-4)" }}>
                            You could pay $32/mo for a DIY builder and still have to do all the work yourself, or you could pay $25/mo to have an expert handle the technology while you run your business.
                        </p>
                    </div>

                    <div className="grid-3" style={{ alignItems: "stretch", marginBottom: "var(--spacing-20)" }}>
                        {managedHostingPlans.map((plan, i) => (
                            <div key={i} style={{ position: "relative", display: "flex", flexDirection: "column" }} className={plan.popular ? "popular-wrapper" : ""}>
                                {plan.popular && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            background: "var(--color-accent)",
                                            color: "var(--color-dark)",
                                            padding: "4px 16px",
                                            borderRadius: "var(--radius-full)",
                                            fontSize: "var(--font-size-xs)",
                                            fontWeight: 800,
                                            letterSpacing: "0.05em",
                                            textTransform: "uppercase",
                                            zIndex: 20
                                        }}
                                    >
                                        Most Popular
                                    </div>
                                )}
                                <div
                                    className={`card ${plan.popular ? "popular-card" : ""}`}
                                    style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                                >
                                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                                        <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 8 }}>{plan.name}</h3>
                                    </div>
                                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                                        <span className="price-text" style={{ fontSize: "3rem" }}>
                                            {plan.price}
                                        </span>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", marginTop: 8 }}>{plan.priceNote}</p>
                                    </div>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", flexGrow: 1 }}>
                                        {plan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    padding: "12px 0",
                                                    borderBottom: "1px solid var(--color-glass-border)",
                                                    fontSize: "var(--font-size-sm)",
                                                    display: "flex",
                                                    gap: 12,
                                                    color: "var(--color-text-main)",
                                                }}
                                            >
                                                <span style={{ color: "var(--color-primary)", fontWeight: "bold" }}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className={plan.popular ? "btn btn-accent" : "btn btn-outline"}
                                        style={{ width: "100%", justifyContent: "center" }}
                                    >
                                        Choose {plan.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-alt">
                <div className="container">
                    <div className="two-col" style={{ alignItems: "center" }}>
                        <div>
                            <h2>Real Support from Real People</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                A website isn&apos;t a billboard you put up and forget about. It&apos;s
                                software that needs to be updated, secured, and backed up
                                regularly. If you ignore it, it will eventually break or get
                                hacked.
                            </p>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Our managed hosting acts as an insurance policy for your website. We handle all the technical details so you can focus on running your business, not playing IT support. If anything ever breaks, we fix it instantly at no extra cost.
                            </p>
                        </div>
                        <div className="card" style={{ padding: "3rem" }}>
                            <h3 style={{ marginBottom: 16 }}>Every Tier Includes:</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> 99.9% Uptime Guarantee
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Free SSL Certificate Auto-Renewals
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Global CDN for Fast Load Times
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> 24/7 Security Event Monitoring
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Protect Your Business Online</h2>
                    <p>Don&apos;t wait until your site gets hacked. Secure it today.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Started with Hosting <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
