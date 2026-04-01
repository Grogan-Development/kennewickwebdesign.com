import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  industries,
  portfolioProjects,
  pricingPackages,
  services,
} from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: `${site.name} | Websites for Tri-Cities Businesses`,
  description:
    "Custom websites, SEO foundations, and ongoing support for Tri-Cities businesses that need to look credible and turn visits into calls.",
  openGraph: {
    url: "/",
    title: `${site.name} | Websites for Tri-Cities Businesses`,
    description:
      "Custom websites, SEO foundations, and ongoing support for Tri-Cities businesses that need to look credible and turn visits into calls.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Websites for Tri-Cities Businesses`,
    description:
      "Custom websites, SEO foundations, and ongoing support for Tri-Cities businesses that need to look credible and turn visits into calls.",
  },
};

function ServiceIcon({ slug }: { slug: string }) {
  const svgProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (slug) {
    case "web-design":
      return (
        <svg {...svgProps}>
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case "local-seo":
      return (
        <svg {...svgProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    case "managed-hosting":
      return (
        <svg {...svgProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg {...svgProps}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
}

const proofItems = [
  { number: site.city, label: "Based in the Tri-Cities" },
  { number: pricingPackages[0]?.price ?? "$750", label: "Entry point for starter sites" },
  { number: "30-Day", label: "Post-launch support window" },
  { number: String(portfolioProjects.length), label: "Live examples on the portfolio page" },
];

const processSteps = [
  {
    step: "01",
    title: "Clarify the goal",
    description:
      "We define what the site needs to do: generate calls, support sales, validate the business, or clean up an outdated presence.",
  },
  {
    step: "02",
    title: "Design the structure",
    description:
      "You get a clear page plan, conversion-focused messaging, and a design direction that fits your business instead of a generic agency template.",
  },
  {
    step: "03",
    title: "Build, launch, support",
    description:
      "The site is built, tested, launched, and supported for 30 days so any launch issues or small fixes are handled quickly.",
  },
];

const consultationPoints = [
  "Review your current site or explain the scope for a new one",
  "Recommend the right package or a custom build path",
  "Identify weak spots in messaging, structure, or lead flow",
  "Outline timeline, next steps, and what you would need to provide",
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="bg-grid"></div>
        <div className="aurora-glow" style={{ top: "-15%", left: "-5%" }}></div>
        <div className="aurora-glow accent" style={{ bottom: "5%", right: "-10%" }}></div>
        <div
          className="floating-shape"
          style={{ width: 120, height: 120, top: "15%", right: "10%", transform: "rotate(15deg)" }}
        ></div>
        <div
          className="floating-shape"
          style={{ width: 80, height: 80, bottom: "20%", left: "8%", transform: "rotate(-10deg)", borderRadius: "50%" }}
        ></div>
        <div
          className="floating-shape"
          style={{ width: 200, height: 200, top: "60%", right: "25%", transform: "rotate(45deg)", opacity: 0.3 }}
        ></div>

        <div className="container hero-content">
          <span className="local-badge local-badge-gold animate-in-delay-1">
            {site.city}, {site.state} • Direct with {site.founderName}
          </span>
          <h1 className="animate-in-delay-2" style={{ marginBottom: "var(--spacing-6)", marginTop: "var(--spacing-4)" }}>
            Websites for Tri-Cities businesses that need to look credible and convert.
          </h1>
          <p className="animate-in-delay-3" style={{ marginBottom: "2.5rem", display: "block" }}>
            {site.name} builds custom marketing sites, SEO-ready foundations, and clean lead flows for local
            businesses that are tired of dated design, vague pricing, or websites that do nothing.
          </p>
          <div
            className="btn-group animate-in-delay-4"
            style={{ justifyContent: "center", gap: "1.5rem", marginBottom: "2rem" }}
          >
            <Link href="/contact" className="btn btn-accent btn-lg">
              {site.primaryCtaLabel} <span className="icon-arrow">→</span>
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-lg">
              View Live Examples
            </Link>
          </div>

          <div className="hero-trust-badges animate-in-delay-4" style={{ paddingBottom: "1rem" }}>
            <div className="trust-badge"><span>Pricing from {pricingPackages[0]?.price ?? "$750"}</span></div>
            <div className="trust-divider"></div>
            <div className="trust-badge"><span>30-day support included</span></div>
            <div className="trust-divider"></div>
            <div className="trust-badge"><span>Portfolio page with live examples</span></div>
          </div>
        </div>
      </section>

      <section className="stats-section" style={{ marginTop: "-2rem" }}>
        <div className="container">
          <div className="stats-bar">
            {proofItems.map((item) => (
              <div key={item.label} className="stat-item">
                <div className="stat-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="local-badge">Services</span>
            <h2 className="mt-4">What This Studio Actually Helps With</h2>
            <div className="divider"></div>
            <p className="section-muted-text">
              The focus is practical: better positioning, a cleaner first impression, and a site structure that
              makes it easier for the right customer to take action.
            </p>
          </div>

          <div className="grid-2">
            {services.map((service, index) => (
              <div key={service.slug} className={`card card-flex ${index === 0 ? "card-featured" : ""}`}>
                <div className={`service-card-icon ${index === 0 ? "accent-bg" : "primary-bg"}`}>
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3 style={{ fontSize: "var(--font-size-xl)", marginBottom: 12 }}>{service.title}</h3>
                <p className="card-text flex-grow mb-6">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="btn btn-outline btn-sm btn-self-start">
                  View Service Details <span className="icon-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="bg-grid"></div>
        <div className="container z-above">
          <div className="section-header animate-in">
            <span className="local-badge local-badge-gold">Portfolio</span>
            <h2 className="mt-4">Live Examples You Can Click Through</h2>
            <div className="divider"></div>
            <p className="section-muted-text">
              No mock thumbnails, no NDA theater. These are public examples that show how the work handles messaging,
              layout, responsiveness, and product experience.
            </p>
          </div>

          <div className="grid-2 portfolio-grid">
            {portfolioProjects.map((project) => (
              <div key={project.href} className="card card-flex portfolio-card">
                <div className="portfolio-card-top">
                  <span className="local-badge" style={{ marginBottom: 0 }}>{project.category}</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Visit Site
                  </a>
                </div>
                <h3 style={{ fontSize: "var(--font-size-xl)", marginBottom: 12 }}>{project.title}</h3>
                <p className="card-text portfolio-card-summary">{project.summary}</p>
                <ul className="pricing-feature-list portfolio-feature-list">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={highlight}
                      className="pricing-feature"
                      style={index === project.highlights.length - 1 ? { borderBottom: "none" } : undefined}
                    >
                      <span className="check" aria-hidden="true">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="portfolio-section-cta">
            <Link href="/portfolio" className="btn btn-accent btn-lg">
              View Full Portfolio Page <span className="icon-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-angled">
        <div className="aurora-glow" style={{ top: "20%", right: "-20%", opacity: 0.2 }}></div>
        <div className="container z-above">
          <div className="two-col">
            <div className="animate-slide-left">
              <span className="local-badge">How Projects Run</span>
              <h2>Direct communication. Clear scope. No agency fog.</h2>
              <p className="section-muted-text" style={{ marginBottom: 32 }}>
                You work directly with {site.founderName}. That means faster feedback, fewer layers, and a site
                that stays tied to the actual business objective instead of getting buried under generic process.
              </p>

              <div className="feature-row">
                <div className="feature-icon accent-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6"></path><path d="M18 20V10"></path><path d="M6 20v-3"></path></svg>
                </div>
                <div>
                  <h4 className="feature-title">Messaging before decoration</h4>
                  <p className="text-muted">The site has to explain what you do clearly before it tries to impress anyone with effects.</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="feature-title">Scope that matches the budget</h4>
                  <p className="text-muted">Starter, Growth, and Premium each have clear differences so you know what you are buying.</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon accent-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                </div>
                <div>
                  <h4 className="feature-title">Launch support included</h4>
                  <p className="text-muted">For 30 days after launch, small issues and cleanup are handled without turning into another sales cycle.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-right" style={{ position: "relative" }}>
              <div style={{ position: "relative", padding: "2rem" }}>
                <h3 style={{ marginBottom: 24 }}>Typical Project Flow</h3>
                {processSteps.map((item) => (
                  <div key={item.step} className="card process-card">
                    <div className="process-step-number">{item.step}</div>
                    <div>
                      <div className="process-step-title">{item.title}</div>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="aurora-glow accent" style={{ bottom: "-20%", left: "-20%", width: 300, height: 300, zIndex: -1 }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="local-badge">Pricing</span>
            <h2 className="mt-4">Clear Packages Instead of Mystery Quotes</h2>
            <div className="divider"></div>
            <p className="section-muted-text">
              The packages are designed to give small businesses a clear entry point. If a project does not fit one
              cleanly, the next step is a scoped custom proposal, not a vague sales call.
            </p>
          </div>

          <div className="grid-3" style={{ alignItems: "stretch" }}>
            {pricingPackages.map((plan) => (
              <div key={plan.name} className={`card pricing-card ${plan.popular ? "popular-card" : ""}`}>
                <div className="pricing-card-header">
                  <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 8 }}>{plan.name}</h3>
                  <p className="text-muted" style={{ fontSize: "var(--font-size-sm)" }}>{plan.positioning}</p>
                </div>
                <div className="pricing-card-header">
                  <span className="price-text">{plan.price}</span>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-xs)", marginTop: 8 }}>{plan.priceNote}</p>
                </div>
                <ul className="pricing-feature-list">
                  {plan.features.slice(0, 6).map((feature, index) => (
                    <li
                      key={feature}
                      className="pricing-feature"
                      style={index === 5 ? { borderBottom: "none" } : undefined}
                    >
                      <span className="check" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.features.length > 6 && (
                  <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)", marginBottom: 12 }}>
                    + {plan.features.length - 6} more on the pricing page
                  </p>
                )}
                <p className="card-text" style={{ marginTop: "auto", marginBottom: 20 }}>
                  Typical timeline: {plan.timeline}
                </p>
                <Link href={`/pricing/get-started?plan=${plan.name.toLowerCase()}`} className={plan.popular ? "btn btn-accent" : "btn btn-outline"}>
                  Start with {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="bg-grid"></div>
        <div className="container z-above">
          <div className="section-header-left animate-in">
            <span className="local-badge">Industries</span>
            <h2 className="mt-4">Built for businesses that rely on trust and local visibility</h2>
            <div className="divider"></div>
            <p className="section-muted-text" style={{ maxWidth: 560 }}>
              Most of the fit is in service businesses and local operators that need a stronger first impression,
              cleaner information architecture, and a better path from search visit to inquiry.
            </p>
          </div>

          <div className="grid-3">
            {industries.map((item) => (
              <div className="card card-flex card-flush" key={item.slug}>
                <div className="card-image-wrapper">
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text flex-grow mb-6">{item.description}</p>
                  <Link href={`/${item.slug}`} className="btn btn-outline btn-self-start">
                    View Industry Page <span className="icon-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-split">
        <div className="container z-above">
          <div className="two-col">
            <div className="animate-in">
              <span className="local-badge local-badge-gold">Next Step</span>
              <h2 className="mt-4">Book a consultation if you want clarity, not a pitch.</h2>
              <p className="section-muted-text mb-8">
                This is the right next move if you want to understand scope, price fit, timeline, or whether your
                current site is helping or hurting the business.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-accent btn-lg">
                  {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="animate-slide-right" style={{ textAlign: "center" }}>
              <div className="audit-card">
                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 12 }}>What the consultation covers</h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: 24, fontSize: "var(--font-size-sm)", lineHeight: 1.7 }}>
                  You leave with a clearer sense of fit, scope, and what the project would actually involve.
                </p>
                <div className="audit-checklist">
                  {consultationPoints.map((item) => (
                    <div key={item} className="audit-checklist-item">
                      <span className="check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
