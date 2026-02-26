import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/restaurants" },
    title: "Restaurant Website Design — Kennewick / Tri-Cities",
    description:
        "Professional websites for Tri-Cities restaurants, cafes, and food services. Mobile-first design, online menus, and local SEO to attract more diners.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function RestaurantPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Food Service</span>
                    <h1 className="mt-4">
                        Restaurant &amp; Food Service Web Design
                    </h1>
                    <p>
                        Mouth-watering websites that turn online searches into booked tables and to-go orders.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Websites Built for Hungry Customers</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Diners search for food on their phones. If your menu is a clunky PDF or your site is slow to load, they will bounce to the next option. We build fast, mobile-first websites that look delicious and function flawlessly.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What You Get</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Mobile-optimized menus (no PDFs)
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Online ordering and reservation integration
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Google Maps and local SEO optimization
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Professional food photography showcasing
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> High-converting clear call-to-actions
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>Local Expertise</h3>
                                <p className="card-text">We know the Tri-Cities dining scene. Allow us to handle the tech so you can focus on the food. Transparent pricing with 30-day post-launch support included.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Fill More Tables?</h2>
                    <p>Let&apos;s build a site that grows your restaurant&apos;s local foot traffic.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Restaurant Site Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
