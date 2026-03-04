import type { Metadata } from "next";
import Link from "next/link";
import { pricingPackages } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/web-design-kennewick" },
    title: "Web Design Kennewick — Custom Websites for Local Businesses",
    description:
        "Looking for web design in Kennewick? We build custom websites for local businesses that need clearer messaging, better structure, and stronger credibility.",
};

export default function WebDesignKennewickPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Kennewick, WA</span>
                    <h1 className="mt-4">Web Design Kennewick</h1>
                    <p>
                        Custom websites for Kennewick businesses that need a stronger first impression, clearer messaging, and a cleaner path to inquiry.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Kennewick&apos;s Local Web Design Partner</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                If you&apos;re searching for &ldquo;web design Kennewick,&rdquo; you
                                want someone who understands your market — not a national agency
                                that treats the Tri-Cities as just another pin on a map.
                            </p>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                We live in Kennewick and work exclusively with Kennewick &amp;
                                Tri-Cities businesses. The point is to build something that feels
                                credible to local buyers and gives them a simple next step.
                            </p>
                            <div className="btn-group" style={{ marginTop: 32 }}>
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                                </Link>
                                <Link href="/portfolio" className="btn btn-outline btn-lg">
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 24 }}>What Sets Us Apart</h3>
                            <div>
                                <div className="card" style={{ marginBottom: 16, display: "flex", gap: 16, alignItems: "center", padding: "1.5rem" }}>

                                    <div>
                                        <h4 style={{ marginBottom: 4, color: "var(--color-white)", fontSize: "var(--font-size-lg)" }}>Truly Local</h4>
                                        <p className="card-text" style={{ margin: 0 }}>Based in Kennewick — meet in person anytime.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ marginBottom: 16, display: "flex", gap: 16, alignItems: "center", padding: "1.5rem" }}>

                                    <div>
                                        <h4 style={{ marginBottom: 4, color: "var(--color-white)", fontSize: "var(--font-size-lg)" }}>Transparent Pricing</h4>
                                        <p className="card-text" style={{ margin: 0 }}>Starting from {pricingPackages[0]?.price ?? "$750"}. No surprises.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: "flex", gap: 16, alignItems: "center", padding: "1.5rem" }}>

                                    <div>
                                        <h4 style={{ marginBottom: 4, color: "var(--color-white)", fontSize: "var(--font-size-lg)" }}>Results-Focused</h4>
                                        <p className="card-text" style={{ margin: 0 }}>Websites built to generate leads, not just look pretty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Need a Website in Kennewick?</h2>
                    <p>Start with a direct conversation about what the site needs to do and which package fits the business.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                        </Link>
                        <Link href="/pricing" className="btn btn-outline btn-lg">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
