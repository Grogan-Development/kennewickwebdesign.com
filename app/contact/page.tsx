import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/contact" },
    title: "Contact",
    description:
        "Get in touch to discuss a new website, redesign, local SEO work, or ongoing support for your Tri-Cities business.",
};

export default function ContactPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Get In Touch</span>
                    <h1>Tell Me What You&apos;re Building</h1>
                    <p>
                        Reach out about a new site, a redesign, local SEO, or ongoing support.
                        You&apos;ll hear back within one business day.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 1200 }}>
                    <div className="two-col" style={{ alignItems: "start", gap: "var(--spacing-16)" }}>

                        {/* Glassmorphic Form Container */}
                        <div className="glass-container contact-form-card">
                            <h2 className="mb-8" style={{ fontSize: "var(--font-size-3xl)", color: "var(--color-white)", fontWeight: 600 }}>Start the Conversation</h2>
                            <p style={{ color: "var(--color-text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                                The more context you share, the more useful the first reply will be.
                                If you already have a site, include the URL and what is not working.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Contact Information & Process */}
                        <div style={{ padding: "var(--spacing-6) 0" }}>
                            <h2 style={{ marginBottom: "var(--spacing-8)", fontSize: "var(--font-size-2xl)", color: "var(--color-white)", fontWeight: 600 }}>What to Expect</h2>

                            <div className="card" style={{ marginBottom: 32 }}>
                                <h3 style={{ marginBottom: 16 }}>Best fit for this site</h3>
                                <ul className="pricing-feature-list">
                                    <li className="pricing-feature">
                                        <span className="check" aria-hidden="true">✓</span>
                                        Local service businesses that need a better first impression
                                    </li>
                                    <li className="pricing-feature">
                                        <span className="check" aria-hidden="true">✓</span>
                                        Businesses with an outdated site that is not converting
                                    </li>
                                    <li className="pricing-feature" style={{ borderBottom: "none" }}>
                                        <span className="check" aria-hidden="true">✓</span>
                                        Owners who want clear pricing and direct communication
                                    </li>
                                </ul>
                            </div>

                            <div className="card" style={{ marginBottom: 32 }}>
                                <h3 style={{ marginBottom: 16 }}>After you reach out</h3>
                                <div style={{ display: "grid", gap: 16 }}>
                                    {[
                                        "I review your message and current website if you have one.",
                                        "You get a direct reply with next steps, pricing fit, or clarifying questions.",
                                        "If it makes sense, we schedule a consultation and map the project scope.",
                                    ].map((item, index) => (
                                        <div key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                            <div
                                                style={{
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    background: "rgba(59,130,246,0.18)",
                                                    color: "var(--color-primary)",
                                                    fontWeight: 800,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <p style={{ margin: 0, color: "var(--color-text-muted)", lineHeight: 1.7 }}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 style={{ marginBottom: "var(--spacing-8)", fontSize: "var(--font-size-2xl)", color: "var(--color-white)", fontWeight: 600 }}>Direct Contact</h2>

                            <div className="contact-info-card" style={{ marginBottom: 32 }}>
                                <div className="contact-info-icon primary">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 className="feature-title" style={{ color: "var(--color-white)" }}>Location</h4>
                                    <p className="text-muted">{site.city}, {site.state}<br />Serving the Tri-Cities and surrounding businesses</p>
                                </div>
                            </div>

                            <div className="contact-info-card" style={{ marginBottom: 32 }}>
                                <div className="contact-info-icon primary">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="feature-title" style={{ color: "var(--color-white)" }}>Phone</h4>
                                    <p>
                                        <a href={`tel:${site.phoneHref}`} className="text-muted">{site.phoneDisplay}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-info-card" style={{ marginBottom: 48 }}>
                                <div className="contact-info-icon primary">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h4 className="feature-title" style={{ color: "var(--color-white)" }}>Email</h4>
                                    <p>
                                        <a href={`mailto:${site.email}`} className="text-muted">{site.email}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="card" style={{ padding: "1.75rem" }}>
                                <h3 style={{ marginBottom: 12 }}>Need more proof first?</h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                                    Review live examples, package pricing, and service details before you reach out.
                                </p>
                                <div className="btn-group">
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
                </div>
            </section>
        </>
    );
}
