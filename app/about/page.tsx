import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/about" },
    title: "About Us",
    description:
        "We're your local Kennewick web design experts. Learn why Tri-Cities businesses trust us to build premium, lead-generating websites.",
};

export default function AboutPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.4 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Based in Kennewick</span>
                    <h1 className="mt-4">Hi, I&apos;m Your Local Web Expert</h1>
                    <p>
                        No offshore teams. No call centers. Just a Tri-Cities neighbor who
                        knows how to build websites that actually grow your business.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div style={{ position: "relative" }}>
                            {/* Premium Tech Visual replacing generic image */}
                            <div style={{
                                background: "linear-gradient(135deg, rgba(2, 8, 21, 0.4), rgba(15, 23, 42, 0.8))",
                                borderRadius: "var(--radius-xl)",
                                position: "relative",
                                zIndex: 2,
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                minHeight: "500px",
                                height: "100%",
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.02)"
                            }}>
                                {/* Grid texture background */}
                                <div className="bg-grid" style={{ opacity: 0.25, zIndex: 0 }}></div>

                                {/* Amber Glow */}
                                <div style={{
                                    position: "absolute",
                                    top: "10%",
                                    right: "10%",
                                    width: "150px",
                                    height: "150px",
                                    background: "var(--color-accent)",
                                    borderRadius: "50%",
                                    filter: "blur(60px)",
                                    opacity: 0.15,
                                    zIndex: 0
                                }}></div>

                                {/* Floating Window 1: Code Editor */}
                                <div className="animate-in" style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "-5%",
                                    width: "70%",
                                    height: "45%",
                                    background: "rgba(2, 8, 21, 0.8)",
                                    border: "1px solid rgba(59, 130, 246, 0.3)",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                    backdropFilter: "blur(12px)",
                                    transform: "rotate(-4deg)",
                                    padding: "1.5rem",
                                    zIndex: 2
                                }}>
                                    <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}></div>
                                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }}></div>
                                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }}></div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        <div style={{ width: "85%", height: "8px", background: "rgba(59, 130, 246, 0.6)", borderRadius: "4px" }}></div>
                                        <div style={{ width: "60%", height: "8px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "4px" }}></div>
                                        <div style={{ width: "40%", height: "8px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "4px" }}></div>
                                        <div style={{ width: "75%", height: "8px", background: "var(--color-accent)", opacity: 0.8, borderRadius: "4px", marginTop: "8px" }}></div>
                                    </div>
                                </div>

                                {/* Floating Window 2: Analytics / Dashboard */}
                                <div className="animate-in-delay-1" style={{
                                    position: "absolute",
                                    bottom: "10%",
                                    right: "-10%",
                                    width: "75%",
                                    height: "55%",
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "12px",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
                                    backdropFilter: "blur(16px)",
                                    transform: "rotate(3deg)",
                                    padding: "1.5rem",
                                    zIndex: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end"
                                }}>
                                    <div style={{ width: "100%", height: "50%", borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: "1.2rem", display: "flex", alignItems: "flex-end", gap: "10px", paddingBottom: "10px" }}>
                                        <div style={{ flex: 1, height: "30%", background: "rgba(59, 130, 246, 0.3)", borderRadius: "4px 4px 0 0" }}></div>
                                        <div style={{ flex: 1, height: "70%", background: "rgba(59, 130, 246, 0.5)", borderRadius: "4px 4px 0 0" }}></div>
                                        <div style={{ flex: 1, height: "50%", background: "var(--color-accent)", opacity: 0.8, borderRadius: "4px 4px 0 0" }}></div>
                                        <div style={{ flex: 1, height: "100%", background: "rgba(59, 130, 246, 0.8)", borderRadius: "4px 4px 0 0", boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}></div>
                                    </div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <div style={{ flex: 1, height: "48px", background: "rgba(255,255,255,0.04)", borderRadius: "8px" }}></div>
                                        <div style={{ flex: 1, height: "48px", background: "rgba(255,255,255,0.04)", borderRadius: "8px" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="aurora-glow accent" style={{ bottom: "-10%", right: "-10%", zIndex: 1 }}></div>
                        </div>

                        <div>
                            <h2>Why I Started Kennewick Web Design</h2>
                            <p className="text-muted" style={{ marginTop: 16 }}>
                                I was born and raised right here in Kennewick. I spent years in Houston, TX, honing my skills across a wide range of industries — from manufacturing and sales to graphic design, photography, video editing, and complete web development.
                            </p>
                            <p className="text-muted" style={{ marginTop: 16 }}>
                                But ultimately, I wanted to bring that diverse experience back home. I started Kennewick Web Design to be closer to my family, and to use my agency-level skills to help local Tri-Cities businesses grow through transparent, high-converting websites.
                            </p>

                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>Our Core Values</h3>
                            <div className="card" style={{ padding: "1.5rem" }}>
                                <ul className="pricing-feature-list">
                                    <li className="pricing-feature">
                                        <span className="check" aria-hidden="true">✦</span>
                                        <div>
                                            <strong>Transparency first:</strong> We publish our pricing.
                                        </div>
                                    </li>
                                    <li className="pricing-feature">
                                        <span className="check" aria-hidden="true">✦</span>
                                        <div>
                                            <strong>Results over aesthetics:</strong> It has to look great, but it primarily has to convert.
                                        </div>
                                    </li>
                                    <li className="pricing-feature" style={{ borderBottom: "none" }}>
                                        <span className="check" aria-hidden="true">✦</span>
                                        <div>
                                            <strong>Long-term partnerships:</strong> We don’t just launch and leave.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Let&apos;s Work Together</h2>
                    <p>Ready to upgrade your web presence? Let&apos;s grab coffee and talk strategy.</p>
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
