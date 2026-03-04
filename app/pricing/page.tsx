import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { pricingPackages, pricingFAQs, managedHostingPlans } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/pricing" },
    title: "Pricing",
    description:
        "Clear website pricing for Tri-Cities businesses, with packages starting at $750 and defined differences in scope, strategy, and support.",
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
                        Clear pricing for local businesses that want a real website plan.
                    </h1>
                    <p>
                        Each package has a clear starting point, scope, and support window.
                        If your project does not fit neatly into one, we scope it honestly instead of forcing it.
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
                        <h2>Keep It Running After Launch</h2>
                        <p className="text-muted">Managed hosting plans cover maintenance, monitoring, and support once the website is live.</p>
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
                            If you need a larger marketing site, a product flow, or a more involved integration, the next step is a scoped conversation about goals, complexity, and budget.
                        </p>
                        <div className="btn-group" style={{ justifyContent: "center" }}>
                            <a href={`tel:${site.phoneHref}`} className="btn btn-outline">
                                Call {site.phoneDisplay}
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
                        Book a consultation and we&apos;ll help you decide whether Starter, Growth, Premium, or a custom scope is the right fit.
                    </p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                        </Link>
                        <Link href="/portfolio" className="btn btn-outline btn-lg">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}
