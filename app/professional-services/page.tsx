import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/professional-services" },
    title: "Professional Services Web Design — Kennewick / Tri-Cities",
    description:
        "Custom websites for Tri-Cities law firms, accountants, consultants, and B2B professionals. Authority-building design and local SEO.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function ProfessionalServicesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Professional Services</span>
                    <h1 className="mt-4">
                        Web Design for Professionals
                    </h1>
                    <p>
                        High-end websites that build instant authority for law firms, accounting practices, and consultants.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Websites that Command Respect</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                In professional services, trust is everything. Your website is often the first point of contact for potential clients. We build clean, sophisticated sites that reflect your expertise and professionalism.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What You Get</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Authority-building, premium design
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Secure consultation booking forms
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Professional team bios and profiles
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Custom blog integration for thought leadership
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Advanced local SEO targeting
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>Your Digital Handshake</h3>
                                <p className="card-text">We know how to translate your complex services into clear, compelling web copy and design that converts casual visitors into paying clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Elevate Your Brand?</h2>
                    <p>Let&apos;s build a digital presence that reflects the quality of your services.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Web Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
