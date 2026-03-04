import Link from "next/link";
import { site } from "@/lib/site";

interface CityPageProps {
    city: string;
    h1: string;
    description: string;
    localFact: string;
    neighborhoodMention: string;
}

export default function CityLandingPage({
    city,
    h1,
    description,
    localFact,
    neighborhoodMention,
}: CityPageProps) {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">{city}, WA</span>
                    <h1 className="mt-4">{h1}</h1>
                    <p>{description}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Why {city} businesses work with us</h2>
                            <p className="text-muted" style={{ marginTop: 12 }}>
                                We&apos;re based in {site.city}, which means we know the Tri-Cities market from the inside.
                                {` ${neighborhoodMention}`}
                            </p>
                            <p className="text-muted" style={{ marginTop: 12 }}>
                                {localFact}
                            </p>
                            <p className="text-muted" style={{ marginTop: 12 }}>
                                The value is not just geography. It&apos;s being close enough to understand how local buyers evaluate a business,
                                what information they need first, and what kind of site feels credible in this market.
                            </p>
                        </div>
                        <div className="card city-offer-card">
                            <h3 style={{ marginBottom: 24 }}>What we usually help fix</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                {[
                                    "Outdated websites that do not match the quality of the business",
                                    "Messaging that is too vague to convert the right visitor",
                                    "Local SEO foundations for service-area searches",
                                    "Lead forms and calls to action that are easy to use on mobile",
                                    "Ongoing hosting and support after launch",
                                ].map((item, i) => (
                                    <li key={i} className="audit-checklist-item" style={{ marginBottom: 16, color: "var(--color-text-main)" }}>
                                        <span className="check" aria-hidden="true">✦</span>
                                        <span style={{ color: "var(--color-text-main)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="btn-group" style={{ marginTop: 24 }}>
                                <Link href="/portfolio" className="btn btn-outline btn-sm">
                                    View Portfolio
                                </Link>
                                <Link href="/pricing" className="btn btn-outline btn-sm">
                                    View Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-alt">
                <div className="aurora-glow" style={{ top: "10%", right: "-10%" }}></div>
                <div className="container">
                    <div className="section-header">
                        <h2>Common fits in {city}</h2>
                        <div className="divider" />
                    </div>
                    <div className="grid-3">
                        <Link href="/web-design-for-contractors" style={{ textDecoration: "none" }}>
                            <div className="card text-center">
                                <span className="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></span>
                                <h3 className="card-title">Contractors</h3>
                            </div>
                        </Link>
                        <Link href="/winery-website-design" style={{ textDecoration: "none" }}>
                            <div className="card text-center">

                                <h3 className="card-title">Wineries</h3>
                            </div>
                        </Link>
                        <Link href="/medical-website-design" style={{ textDecoration: "none" }}>
                            <div className="card text-center">

                                <h3 className="card-title">Healthcare</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to improve how your {city} business shows up online?</h2>
                    <p>
                        Start with a direct conversation about what is not working today and what the right next step looks like.
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
