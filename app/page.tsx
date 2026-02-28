import Link from "next/link";
import Image from "next/image";
import { services, industries } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev" },
  openGraph: {
    url: "https://grogan.dev",
    title: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    description: "Custom websites for Kennewick & Tri-Cities businesses. Web design, local SEO, and ongoing care plans from your local Kennewick neighbor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennewick Web Design — Custom Websites for Tri-Cities Businesses",
    description: "Custom websites for Kennewick & Tri-Cities businesses. Transparent pricing, no templates.",
  },
};

function ServiceIcon({ slug }: { slug: string }) {
  const svgProps = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (slug) {
    case "web-design":
      return <svg {...svgProps}><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>;
    case "local-seo":
      return <svg {...svgProps}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>;
    case "managed-hosting":
      return <svg {...svgProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case "ecommerce":
      return <svg {...svgProps}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>;
    default:
      return <svg {...svgProps}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
  }
}

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO — Animated gradient mesh, floating shapes
          ============================================ */}
      <section className="hero">
        <div className="bg-grid"></div>
        <div className="aurora-glow" style={{ top: "-15%", left: "-5%" }}></div>
        <div className="aurora-glow accent" style={{ bottom: "5%", right: "-10%" }}></div>

        {/* Floating geometric shapes */}
        <div className="floating-shape" style={{ width: 120, height: 120, top: "15%", right: "10%", transform: "rotate(15deg)" }}></div>
        <div className="floating-shape" style={{ width: 80, height: 80, bottom: "20%", left: "8%", transform: "rotate(-10deg)", borderRadius: "50%" }}></div>
        <div className="floating-shape" style={{ width: 200, height: 200, top: "60%", right: "25%", transform: "rotate(45deg)", opacity: 0.3 }}></div>

        <div className="container hero-content">
          <h1 className="animate-in-delay-1" style={{ marginBottom: "var(--spacing-6)" }}>Rank Higher. Get More Leads. Look Professional.</h1>
          <p className="animate-in-delay-2" style={{ marginBottom: "2.5rem", display: "block" }}>
            The Kennewick web designer you can actually meet for coffee. Custom websites designed to look great, load fast, and bring in real customers.
          </p>
          <div className="btn-group animate-in-delay-3" style={{ justifyContent: "center", gap: "1.5rem", marginBottom: "2rem" }}>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Book a Strategy Call <span className="icon-arrow">→</span>
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              View Transparent Pricing
            </Link>
          </div>

          <div className="animate-in-delay-4 hero-trust-badges" style={{ paddingBottom: "1rem" }}>
            <div className="trust-badge"><span>Kennewick, WA</span></div>
            <div className="trust-divider"></div>
            <div className="trust-badge"><span>Local & In-Person</span></div>
            <div className="trust-divider"></div>
            <div className="trust-badge"><span>Transparent Pricing</span></div>
          </div>
        </div>
      </section>

      {/* ============================================
          OUR PROMISE — What we stand for (honest)
          ============================================ */}
      <section className="stats-section" style={{ marginTop: "-2rem" }}>
        <div className="container">
          <div className="stats-bar">
            {/* Guaranteed Results */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <div className="stat-number">#1</div>
              <div className="stat-label">Focus is Growth</div>
            </div>
            {/* Local */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="stat-number">Local</div>
              <div className="stat-label">Kennewick Based</div>
            </div>
            {/* $0 Hidden Fees */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="stat-number">$0</div>
              <div className="stat-label">Hidden Fees</div>
            </div>
            {/* 30-Day Support */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="stat-number">30-Day</div>
              <div className="stat-label">Post-Launch Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES — Cards with icons
          ============================================ */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-in">
            <span className="local-badge">What We Do</span>
            <h2 className="mt-4">Services Built for Local Businesses</h2>
            <div className="divider"></div>
          </div>

          <div className="grid-2">
            {services.map((service, i) => (
              <div key={i} className={`card card-flex ${i === 0 ? "card-featured" : ""}`}>
                <div className={`service-card-icon ${i === 0 ? "accent-bg" : "primary-bg"}`}>
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3 style={{ fontSize: "var(--font-size-xl)", marginBottom: 12 }}>{service.title}</h3>
                <p className="card-text flex-grow mb-6">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn btn-outline btn-sm btn-self-start"
                >
                  Learn More <span className="icon-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS / SOCIAL PROOF (Hidden for now until real reviews are available)
          ============================================ */}
      {false && (
        <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
          <div className="container">
            <div className="section-header animate-in" style={{ textAlign: "center", marginBottom: "var(--spacing-16)" }}>
              <span className="local-badge">Real Results</span>
              <h2 className="mt-4">Trusted by Small Businesses</h2>
              <div className="divider" style={{ margin: "0 auto" }}></div>
            </div>

            <div className="grid-3">
              {[
                {
                  text: "Zack completely transformed our online presence. Our old template site was losing us customers, but the new custom design immediately doubled our incoming leads. Plus, being able to meet in person in Kennewick made the whole process easy.",
                  name: "Sarah M.",
                  business: "Local Service Contractor"
                },
                {
                  text: "Transparent pricing is what sold me. We knew exactly what we were paying for, and the final result exceeded our expectations. Our site is lightning fast and ranks on the first page of Google now.",
                  name: "David L.",
                  business: "Tri-Cities Retailer"
                },
                {
                  text: "The 30 days of post-launch support gave us genuine peace of mind. Any minor tweaks or questions we had were answered immediately. Finally, a web designer who actually cares about our success.",
                  name: "Elena R.",
                  business: "Local Boutique"
                }
              ].map((review, i) => (
                <div key={i} className={`card card-hover animate-in-delay-${i + 1}`}>
                  <div style={{ color: "var(--color-accent)", marginBottom: 16 }}>
                    {"★".repeat(5)}
                  </div>
                  <p className="card-text mb-6 mt-0" style={{ fontStyle: "italic", fontSize: "var(--font-size-sm)" }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "14px", color: "var(--color-dark)" }}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-white)", fontSize: "var(--font-size-sm)" }}>{review.name}</div>
                      <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)" }}>{review.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >
      )}

      {/* ============================================
          WHY US — Honest value props, no fake results
          ============================================ */}
      < section className="section-angled" >
        <div className="aurora-glow" style={{ top: "20%", right: "-20%", opacity: 0.2 }}></div>
        <div className="container z-above">
          <div className="two-col">
            <div className="animate-slide-left">
              <span className="local-badge">The Local Difference</span>
              <h2>Why Work With a<br />Local Web Designer?</h2>
              <p className="section-muted-text" style={{ marginBottom: 32 }}>
                Big agencies treat you like a ticket number. Freelancers overseas can&apos;t meet you for coffee. We&apos;re your Kennewick neighbor — and we actually care about your business.
              </p>

              <div className="feature-row">
                <div className="feature-icon accent-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div>
                  <h4 className="feature-title">Meet Face-to-Face</h4>
                  <p className="text-muted">We&apos;re in Kennewick. Let&apos;s grab coffee and walk through your project in person.</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <div>
                  <h4 className="feature-title">No Surprise Bills</h4>
                  <p className="text-muted">Our pricing is published right on the site. No mystery quotes, no bait-and-switch.</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-icon accent-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <div>
                  <h4 className="feature-title">Built to Get Results</h4>
                  <p className="text-muted">Every site is designed to rank on Google and convert visitors into calls and leads.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-right" style={{ position: "relative" }}>
              {/* Our process — honest, transparent */}
              <div style={{ position: "relative", padding: "2rem" }}>
                <h3 style={{ marginBottom: 24 }}>How We Work</h3>

                {[
                  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and customers. No sales pitch — just a conversation." },
                  { step: "02", title: "Custom Design", desc: "We design your site from scratch. You see it before we build it — and you approve every detail." },
                  { step: "03", title: "Build & Launch", desc: "We develop, test, and launch. You get 30 days of support to make sure everything is dialed in." },
                ].map((item, i) => (
                  <div key={i} className="card process-card">
                    <div className="process-step-number">
                      {item.step}
                    </div>
                    <div>
                      <div className="process-step-title">{item.title}</div>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="aurora-glow accent" style={{ bottom: "-20%", left: "-20%", width: 300, height: 300, zIndex: -1 }}></div>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* ============================================
          OUR GUARANTEE — Builds honest trust
          ============================================ */}
      < section className="section" >
        <div className="aurora-glow" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15 }}></div>
        <div className="container z-above">
          <div className="section-header animate-in">
            <span className="local-badge local-badge-gold">Our Promise</span>
            <h2 className="mt-4">We Earn Your Trust —<br />We Don&apos;t Fake It</h2>
            <div className="divider"></div>
            <p className="section-muted-text">
              We&apos;re a new business, and we know trust is earned. Here&apos;s what we guarantee from day one.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                title: "Satisfaction Guarantee",
                desc: "If you're not happy with the design during the approval phase, we'll revise it until you are — or refund your deposit."
              },
              {
                title: "Everything in Writing",
                desc: "Clear contracts, defined milestones, no verbal promises. You know exactly what you're getting and when."
              },
              {
                title: "30-Day Support Included",
                desc: "After launch, we stick around. Bug fixes, content tweaks, questions — we've got you for a full month, free."
              },
            ].map((item, i) => (
              <div key={i} className={`card text-center animate-in-delay-${i + 1}`}>
                <h3 style={{ fontSize: "var(--font-size-xl)", marginBottom: 12 }}>{item.title}</h3>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ============================================
          WHO WE HELP — Industries (left-aligned)
          ============================================ */}
      < section className="section-alt" >
        <div className="bg-grid"></div>
        <div className="container z-above">
          <div className="section-header-left animate-in">
            <span className="local-badge">Industries We Serve</span>
            <h2 className="mt-4">Built for Tri-Cities Businesses</h2>
            <div className="divider"></div>
            <p className="section-muted-text" style={{ maxWidth: 500 }}>
              We specialize in websites for local service businesses. If your customers find you on Google, we can help.
            </p>
          </div>

          <div className="grid-3">
            {industries.map((item, i) => (
              <div className="card card-flex card-flush" key={i}>
                <div className="card-image-wrapper">
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text flex-grow mb-6">{item.description}</p>
                  <Link href={`/${item.slug}`} className="btn btn-outline btn-self-start">
                    View Expertise <span className="icon-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ============================================
          CTA — Split layout with audit checklist
          ============================================ */}
      < section className="cta-split" >
        <div className="container z-above">
          <div className="two-col">
            <div className="animate-in">
              <span className="local-badge local-badge-gold">Let&apos;s Talk</span>
              <h2 className="mt-4">Ready to Get<br />Started?</h2>
              <p className="section-muted-text mb-8">
                Not sure where to begin? Book a free strategy call. We&apos;ll look at your business goals and give you an honest roadmap for success.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Book Free Strategy Call <span className="icon-arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="animate-slide-right" style={{ textAlign: "center" }}>
              <div className="audit-card">

                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: 12 }}>Free Strategy Session</h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: 24, fontSize: "var(--font-size-sm)", lineHeight: 1.7 }}>
                  We&apos;ll review your current site (or help you plan a new one) and give you an honest roadmap.
                </p>
                <div className="audit-checklist">
                  {["SEO health check", "Speed & mobile analysis", "Competitor comparison", "Custom action plan"].map((item, i) => (
                    <div key={i} className="audit-checklist-item">
                      <span className="check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >


    </>
  );
}
