import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/industries" },
    title: "Industries We Serve",
    description:
        "We specialize in web design for Kennewick contractors, Tri-Cities wineries, and healthcare practices.",
};

export default function IndustriesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Local Focus</span>
                    <h1 className="mt-4">Industries We Serve</h1>
                    <p>
                        We don&apos;t try to be everything to everyone. By focusing on key local
                        industries, we know exactly what it takes to dominate your specific
                        market in the Tri-Cities.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {industries.map((ind, i) => (
                            <div className="card" key={i} style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden" }}>
                                <div style={{ position: "relative", width: "100%", height: "200px" }}>
                                    <Image src={ind.image} alt={ind.title} fill style={{ objectFit: "cover" }} />
                                </div>
                                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 16 }}>
                                        {ind.title}
                                    </h2>
                                    <p className="card-text" style={{ flexGrow: 1, marginBottom: 24 }}>
                                        {ind.description}
                                    </p>
                                    <Link href={`/${ind.slug}`} className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                                        View Expertise <span className="icon-arrow">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Don&apos;t see your industry?</h2>
                    <p>We work with many types of local businesses. Let&apos;s talk about your needs.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get in Touch <span className="icon-arrow">→</span>
                        </Link>
                        <Link href="/portfolio" className="btn btn-outline btn-lg">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
