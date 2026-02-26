import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "See examples of our work. Custom websites built for Tri-Cities businesses — we're just getting started.",
};

export default function PortfolioPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Coming Soon</span>
                    <h1 className="mt-4">Our Portfolio</h1>
                    <p>
                        We&apos;re a new business — and we&apos;re building our portfolio one
                        great project at a time. Check back soon to see real results.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
                    <h2>Be Our Next Success Story</h2>
                    <p style={{ color: "var(--color-text-muted)", marginTop: 16, fontSize: "var(--font-size-lg)", lineHeight: 1.8 }}>
                        We&apos;re looking for our first clients who want a premium website
                        at a great value. As a new business, our early clients get our
                        full attention and the best pricing we&apos;ll ever offer.
                    </p>
                    <div className="btn-group" style={{ justifyContent: "center", marginTop: 32 }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Let&apos;s Build Something Great <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
