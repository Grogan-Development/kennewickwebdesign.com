import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="aurora-glow" style={{ bottom: "-20%", right: "-10%", opacity: 0.1 }}></div>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div style={{ marginBottom: 24 }}>
                            <Logo />
                        </div>
                        <p className="footer-description">
                            Custom websites, SEO foundations, and ongoing support for businesses in Kennewick, Pasco, Richland, and the surrounding Tri-Cities.
                        </p>
                        <div className="footer-contact">
                            Built by {site.founderName}<br />
                            {site.city}, {site.state}<br />
                            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><br />
                            <a href={`mailto:${site.email}`}>{site.email}</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link href="/services/web-design" className="footer-link">Web Design</Link></li>
                            <li><Link href="/services/local-seo" className="footer-link">Local SEO</Link></li>
                            <li><Link href="/services/managed-hosting" className="footer-link">Managed Hosting</Link></li>
                            <li><Link href="/services/ecommerce" className="footer-link">E-Commerce &amp; Booking</Link></li>
                        </ul>

                        <h4 style={{ marginTop: 24 }}>Service Areas</h4>
                        <ul className="footer-links">
                            <li><Link href="/kennewick" className="footer-link">Kennewick</Link></li>
                            <li><Link href="/pasco" className="footer-link">Pasco</Link></li>
                            <li><Link href="/richland" className="footer-link">Richland</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Industries</h4>
                        <ul className="footer-links">
                            <li><Link href="/web-design-for-contractors" className="footer-link">Contractors &amp; Home Services</Link></li>
                            <li><Link href="/winery-website-design" className="footer-link">Wineries &amp; Tasting Rooms</Link></li>
                            <li><Link href="/medical-website-design" className="footer-link">Healthcare &amp; Dental</Link></li>
                            <li><Link href="/restaurants" className="footer-link">Restaurants &amp; Food Service</Link></li>
                            <li><Link href="/real-estate" className="footer-link">Real Estate</Link></li>
                            <li><Link href="/professional-services" className="footer-link">Professional Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link href="/about" className="footer-link">About Us</Link></li>
                            <li><Link href="/portfolio" className="footer-link">Portfolio</Link></li>
                            <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
                            <li><Link href="/blog" className="footer-link">Blog</Link></li>
                            <li><Link href="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom footer-bottom-content">
                    <p className="footer-copyright">
                        © 2026 {site.legalName}. All rights reserved.
                    </p>
                    <div className="footer-legal-links">
                        <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
                        <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
