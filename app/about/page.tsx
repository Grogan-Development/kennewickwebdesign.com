import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Learn how Zack Grogan runs Kennewick Web Design: direct communication, transparent pricing, and websites built for local businesses that need to convert.",
};

const principles = [
  {
    title: "Direct communication",
    description:
      "You work directly with Zack Grogan from the first message through launch. There is no handoff from sales to account management to production.",
  },
  {
    title: "Clear scope and pricing",
    description:
      "Packages are published. Support windows are defined. If something is outside scope, it gets called out instead of being buried in vague language.",
  },
  {
    title: "Work that serves the business",
    description:
      "The goal is not to make a local business look like a startup landing page. The goal is to make it easier for the right customer to trust you and reach out.",
  },
];

const founderNotes = [
  "Based in Kennewick and focused on the Tri-Cities market",
  "Background across design, development, photography, and product work",
  "Best fit for local businesses that need a stronger first impression",
  "You get 30 days of post-launch support with every project package",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="bg-grid"></div>
        <div className="aurora-glow" style={{ top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.4 }}></div>
        <div className="container z-above">
          <span className="local-badge local-badge-gold">About the Studio</span>
          <h1 className="mt-4">A local studio built around direct work, not agency layers.</h1>
          <p>
            {site.name} is run by {site.founderName}. The business exists to give Tri-Cities owners a more
            straightforward option for websites, SEO foundations, and ongoing support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Why this business exists</h2>
              <p className="text-muted" style={{ marginTop: 16 }}>
                Too many local businesses end up with one of two bad outcomes: an overpriced agency engagement that
                never feels connected to the actual business, or a cheap site that looks fine for a week and then
                becomes a liability.
              </p>
              <p className="text-muted" style={{ marginTop: 16 }}>
                {site.name} is meant to sit in the middle of that gap. The work is custom, the pricing is visible,
                and the communication stays direct. The point is not to sell the biggest possible project. The point
                is to build something that fits the stage of the business and actually helps it move forward.
              </p>
              <p className="text-muted" style={{ marginTop: 16 }}>
                After years working across design, photography, development, and product-oriented builds, Zack brought
                that range back to the Tri-Cities to work more closely with local businesses that need credibility and
                clearer positioning online.
              </p>
            </div>

            <div className="card" style={{ padding: "2.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-dark)",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                  }}
                >
                  ZG
                </div>
                <div>
                  <h3 style={{ marginBottom: 6 }}>{site.founderName}</h3>
                  <p className="text-muted" style={{ margin: 0 }}>
                    Founder, designer, and developer
                  </p>
                </div>
              </div>

              <ul className="pricing-feature-list">
                {founderNotes.map((item, index) => (
                  <li
                    key={item}
                    className="pricing-feature"
                    style={index === founderNotes.length - 1 ? { borderBottom: "none" } : undefined}
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

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="local-badge">Principles</span>
            <h2 className="mt-4">How projects are approached</h2>
            <div className="divider" />
          </div>
          <div className="grid-3">
            {principles.map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
                <p className="card-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-featured card" style={{ padding: "var(--spacing-12)" }}>
            <div className="two-col" style={{ alignItems: "center" }}>
              <div>
                <h2>What you can expect working together</h2>
                <p className="section-muted-text" style={{ marginTop: 16 }}>
                  Clear milestones, honest scope conversations, and a site that is built around the business goal
                  instead of generic agency language. If the fit is wrong, that gets said early.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <Link href="/portfolio" className="btn btn-accent btn-lg">
                  View Portfolio <span className="icon-arrow">→</span>
                </Link>
                <Link href="/pricing" className="btn btn-outline btn-lg">
                  View Pricing
                </Link>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
