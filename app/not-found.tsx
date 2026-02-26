import Link from "next/link";

export default function NotFound() {
    return (
        <section className="page-hero" style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="bg-grid"></div>
            <div className="aurora-glow" style={{ top: "20%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
            <div className="aurora-glow accent" style={{ bottom: "10%", right: "20%", opacity: 0.15 }}></div>

            <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "640px" }}>
                {/* Giant 404 */}
                <h1 style={{
                    fontSize: "clamp(6rem, 15vw, 12rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.06em",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.25em",
                    userSelect: "none"
                }}>
                    404
                </h1>

                <h2 style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    marginBottom: "1rem",
                    color: "var(--color-white)"
                }}>
                    Page Not Found
                </h2>

                <p style={{
                    color: "var(--color-text-muted)",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    marginBottom: "2.5rem"
                }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                <div className="btn-group" style={{ justifyContent: "center", gap: "1rem" }}>
                    <Link href="/" className="btn btn-accent btn-lg">
                        Back to Home <span className="icon-arrow">→</span>
                    </Link>
                    <Link href="/contact" className="btn btn-outline btn-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
