import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/medical-website-design" },
    title: "Medical & Dental Website Design — Kennewick / Tri-Cities",
    description:
        "Professional websites for Kennewick healthcare & dental practices. Online booking, patient info, and local SEO to attract new patients.",
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function MedicalPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Healthcare</span>
                    <h1 className="mt-4">
                        Medical &amp; Dental Website Design
                    </h1>
                    <p>
                        Professional, patient-friendly websites that build trust and make it
                        easy for new patients to book their first appointment.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Websites Built for Patients, Not Just Doctors</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                Patients are searching Google before picking a dentist or doctor.
                                Your website is often their first impression — and for many, it
                                determines whether they&apos;ll call or click away to a
                                competitor.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What You Get</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Clean, professional, trust-building design
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Online appointment booking integration
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Patient privacy &amp; security focused
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Provider bios with professional photos
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Local SEO for &quot;dentist Kennewick&quot; etc.
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>Our Guarantee</h3>
                                <p className="card-text">We&apos;re a local Kennewick business. We promise transparent pricing, face-to-face service, and 30 days of free support after your site launches.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Ready to Attract More Patients?</h2>
                    <p>We understand healthcare. Let&apos;s build a site that grows your practice.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Practice Site Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}
