import type { Metadata } from "next";
import Link from "next/link";
import { portfolioPageCta, portfolioProjects } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/portfolio" },
  title: "Portfolio",
  description:
    "Review live example sites and product work from Kennewick Web Design. See how messaging, structure, and UX are handled on real public builds.",
  openGraph: {
    url: "/portfolio",
    title: "Portfolio | Kennewick Web Design",
    description:
      "Review live example sites and product work from Kennewick Web Design. See how messaging, structure, and UX are handled on real public builds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Kennewick Web Design",
    description:
      "Live example sites from Kennewick Web Design — see how messaging, structure, and UX are handled.",
  },
};

const reviewPoints = [
  "How the homepage frames the offer and guides the next step",
  "Whether the design feels intentional on mobile and desktop",
  "How simple or complex flows are handled for real users",
  "What kind of clarity the copy creates before someone ever reaches out",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="bg-grid"></div>
        <div className="aurora-glow" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
        <div className="container z-above">
          <span className="local-badge local-badge-gold">Live Portfolio</span>
          <h1 className="mt-4">Selected live examples you can review yourself.</h1>
          <p>
            This page points to public work so you can judge the structure, writing, and experience directly instead
            of relying on generic promises.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 portfolio-grid">
            {portfolioProjects.map((project) => (
              <article key={project.href} className="card card-flex portfolio-card">
                <div className="portfolio-card-top">
                  <span className="local-badge" style={{ marginBottom: 0 }}>{project.category}</span>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    Visit Live Site
                  </a>
                </div>
                <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 12 }}>{project.title}</h2>
                <p className="card-text portfolio-card-summary">{project.summary}</p>
                <ul className="pricing-feature-list portfolio-feature-list">
                  {project.highlights.map((item, index) => (
                    <li
                      key={item}
                      className="pricing-feature"
                      style={index === project.highlights.length - 1 ? { borderBottom: "none" } : undefined}
                    >
                      <span className="check" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>What to review on each example</h2>
              <p className="text-muted" style={{ marginTop: 16 }}>
                The point of this page is not just visual inspiration. It is to show how the site handles clarity,
                hierarchy, responsiveness, and the path from arrival to action.
              </p>
            </div>
            <div className="card">
              <ul className="pricing-feature-list">
                {reviewPoints.map((item, index) => (
                  <li
                    key={item}
                    className="pricing-feature"
                    style={index === reviewPoints.length - 1 ? { borderBottom: "none" } : undefined}
                  >
                    <span className="check" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="bg-grid"></div>
        <div className="container z-above">
          <h2>{portfolioPageCta.title}</h2>
          <p>{portfolioPageCta.description}</p>
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
