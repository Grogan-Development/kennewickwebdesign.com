import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/contact" },
    title: "Contact Us",
    description:
        "Get in touch with your local Kennewick web design experts. Free website audits, strategy calls, and quotes.",
};

export default function ContactPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Get In Touch</span>
                    <h1>Let&apos;s Build Something Great</h1>
                    <p>
                        Get a free website audit, ask a question, or book a strategy call.
                        We reply within one business day.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 1200 }}>
                    <div className="two-col" style={{ alignItems: "start", gap: "var(--spacing-16)" }}>

                        {/* Glassmorphic Form Container */}
                        <div className="glass-container contact-form-card">
                            <h2 className="mb-8" style={{ fontSize: "var(--font-size-3xl)", color: "var(--color-white)", fontWeight: 600 }}>Send Us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information & Map */}
                        <div style={{ padding: "var(--spacing-6) 0" }}>
                            <h2 style={{ marginBottom: "var(--spacing-8)", fontSize: "var(--font-size-2xl)", color: "var(--color-white)", fontWeight: 600 }}>Contact Info</h2>

                            <div className="contact-info-card" style={{ marginBottom: 32 }}>
                                <div className="contact-info-icon primary">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 className="feature-title" style={{ color: "var(--color-white)" }}>Location</h4>
                                    <p className="text-muted">Kennewick, WA<br />Serving the Tri-Cities</p>
                                </div>
                            </div>

                            <div className="contact-info-card" style={{ marginBottom: 32 }}>
                                <div className="contact-info-icon primary">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="feature-title" style={{ color: "var(--color-white)" }}>Phone</h4>
                                    <p>
                                        <a href="tel:5094263172" className="text-muted">(509) 426-3172</a>
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
                                        <a href="mailto:info@grogan.dev" className="text-muted">info@grogan.dev</a>
                                    </p>
                                </div>
                            </div>

                            <LazyMap
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176527.03819814895!2d-119.42165351121679!3d46.2654344646017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54987b193e72a147%3A0xfd256fdce5f75c5!2sTri-Cities%2C%20WA!5e1!3m2!1sen!2sus!4v1772045117145!5m2!1sen!2sus"
                                title="Map of Tri-Cities, Washington service area"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
