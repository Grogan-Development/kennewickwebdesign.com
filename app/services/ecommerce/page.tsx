import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/services/ecommerce" },
    title: "E-Commerce & Booking Systems — Kennewick & Tri-Cities",
    description:
        "Sell products online or accept bookings 24/7. E-commerce websites built for Kennewick and Tri-Cities businesses.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function EcommercePage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Online Sales</span>
                    <h1 className="mt-4">E-Commerce &amp; Booking Systems</h1>
                    <p>
                        Turn your website into a 24/7 salesperson. Accept payments, sell
                        products, and book appointments while you sleep.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Making It Easy for Customers to Buy</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Whether you're a Kennewick boutique selling physcial products, or
                                a Richland salon needing to book appointments, we build custom
                                systems that remove the friction from buying.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What We Build:</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Full E-Commerce Stores (WooCommerce/Shopify)
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Service Booking & Calendly Integration
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Restaurant Online Ordering Systems
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Wine Club & Subscription Management
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Secure Payment Gateway Integration
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "3rem" }}>
                            <div style={{ textAlign: "center", marginBottom: 32 }}>
                                <span className="local-badge">Seamless Experience</span>
                                <p className="card-text" style={{ marginTop: 16 }}>
                                    We ensure your digital storefront feels as premium as your physical
                                    location. Fast checkout processes, intuitive navigation, and mobile
                                    optimization mean fewer abandoned carts and more revenue for your
                                    Tri-Cities business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Sell Online?</h2>
                    <p>Let's discuss the best platform for your specific business needs.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Book a Strategy Call <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
