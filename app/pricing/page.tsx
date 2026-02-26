import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { pricingPackages, pricingFAQs, managedHostingPlans } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/pricing" },
    title: "Pricing — Website Packages",
    description:
        "Clear, honest pricing for Kennewick web design. Packages starting at $1,997. No hidden fees, just lead-generating websites.",
};

export default function PricingPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.4 }}></div>
                <div className="container z-above">
                    <span className="local-badge">No Hidden Fees</span>
                    <h1 className="mt-4">
                        Clear, Honest Pricing for Tri-Cities Businesses
                    </h1>
                    <p>
                        We publish our pricing because we believe you deserve to know what
                        you&apos;re paying for — before you pick up the phone.
                    </p>
                </div>
            </section>

            <section className="section pricing-main">
                <div className="container">
                    <div className="grid-3" style={{ alignItems: "stretch" }}>
                        {pricingPackages.map((plan, i) => (
                            <div key={i} className={`card-flex ${plan.popular ? "popular-wrapper" : ""}`} style={{ position: "relative" }}>
                                {plan.popular && (
                                    <div className="popular-badge">Most Popular</div>
                                )}
                                <div className={`card pricing-card ${plan.popular ? "popular-card" : ""}`}>
                                    <div className="pricing-card-header">
                                        <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 8 }}>{plan.name}</h3>
                                        <p className="text-muted" style={{ fontSize: "var(--font-size-sm)" }}>{plan.positioning}</p>
                                    </div>
                                    <div className="pricing-card-header">
                                        <span className="price-text">
                                            {plan.price}
                                        </span>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-xs)", marginTop: 8 }}>{plan.priceNote}</p>
                                    </div>
                                    <ul className="pricing-feature-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="pricing-feature">
                                                <span className="check" aria-hidden="true">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/pricing/get-started?plan=${plan.name.toLowerCase()}`}
                                        className={`${plan.popular ? "btn btn-accent" : "btn btn-outline"} pricing-cta`}
                                    >
                                        Choose {plan.name} <span className="icon-arrow">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: "var(--spacing-12)" }}>
                        <h2>Keep It Running</h2>
                        <p className="text-muted">Fully-managed hosting subscriptions to secure and maintain your investment.</p>
                    </div>
                    <div className="grid-3" style={{ alignItems: "stretch" }}>
                        {managedHostingPlans.map((plan, i) => (
                            <div key={i} className={`card-flex ${plan.popular ? "popular-wrapper" : ""}`} style={{ position: "relative" }}>
                                {plan.popular && (
                                    <div className="popular-badge">Most Popular</div>
                                )}
                                <div className={`card pricing-card ${plan.popular ? "popular-card" : ""}`}>
                                    <div className="pricing-card-header">
                                        <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 8 }}>{plan.name}</h3>
                                    </div>
                                    <div className="pricing-card-header">
                                        <span className="price-text" style={{ fontSize: "2.5rem" }}>
                                            {plan.price}
                                        </span>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-xs)", marginTop: 8 }}>{plan.priceNote}</p>
                                    </div>
                                    <ul className="pricing-feature-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="pricing-feature">
                                                <span className="check" aria-hidden="true">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/services/managed-hosting"
                                        className={`${plan.popular ? "btn btn-accent" : "btn btn-outline"} pricing-cta`}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-alt">
                <div className="container" id="custom-solution">
                    <div className="card-featured card text-center" style={{ padding: "var(--spacing-12)" }}>
                        <h2 style={{ fontSize: "var(--font-size-3xl)", marginBottom: "var(--spacing-4)" }}>Looking for a Custom Solution?</h2>
                        <p className="section-muted-text" style={{ maxWidth: 700, margin: "0 auto var(--spacing-8)" }}>
                            Need something outside the box? Whether it&apos;s a complex web app, an e-commerce store, or a unique integration — let&apos;s talk.
                        </p>
                        <div className="btn-group" style={{ justifyContent: "center" }}>
                            <a href="tel:5094263172" className="btn btn-outline">
                                Call (509) 426-3172
                            </a>
                            <Link href="/pricing/get-started?plan=custom" className="btn btn-primary">
                                Tell Us About Your Project <span className="icon-arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <div className="divider" />
                    </div>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <FAQAccordion faqs={pricingFAQs} />
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Not sure which package is right for you?</h2>
                    <p>
                        Book a free strategy call and we&apos;ll help you choose the best fit
                        for your business goals.
                    </p>
                    <Link href="/contact" className="btn btn-accent btn-lg">
                        Let&apos;s Talk Strategy <span className="icon-arrow">→</span>
                    </Link>
                </div>
            </section>

        </>
    );
}
