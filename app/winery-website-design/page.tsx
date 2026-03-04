import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/winery-website-design" },
    title: "Winery & Tasting Room Website Design — Tri-Cities / Kennewick",
    description:
        "Elegant websites for Tri-Cities wineries and tasting rooms. Online reservations, event calendars, wine club signups — from a local Kennewick web expert.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function WineryPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Wineries</span>
                    <h1 className="mt-4">
                        Winery &amp; Tasting Room Website Design
                    </h1>
                    <p>
                        Elegant, inviting websites that showcase your wines and fill your
                        tasting room — built by someone who actually visits your neighbors.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Your Website Should Be as Inviting as Your Tasting Room</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                The Tri-Cities wine scene is booming, but most winery websites
                                don&apos;t do justice to the experience. We build sites that
                                capture the warmth and elegance of your brand while driving real
                                reservations and sales.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What You Get</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Stunning visual design that matches your brand
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Online reservation / tasting booking system
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Event calendar with RSVPs
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Wine club signup & management
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> E-commerce for online bottle sales
                                </li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: "2.25rem" }}>
                            <h3 style={{ marginBottom: 16 }}>What winery visitors usually need first</h3>
                            <ul className="pricing-feature-list">
                                {[
                                    "Hours, location, and tasting information without hunting for it",
                                    "A reservation flow that works cleanly on mobile",
                                    "A visual feel that matches the tasting room experience",
                                    "Event, club, and bottle-sale paths that are easy to understand",
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="pricing-feature"
                                        style={index === 3 ? { borderBottom: "none" } : undefined}
                                    >
                                        <span className="check" aria-hidden="true">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Let&apos;s Fill Your Tasting Room</h2>
                    <p>Tell us about the winery and we&apos;ll map the best structure for visits, reservations, and club signups.</p>
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
