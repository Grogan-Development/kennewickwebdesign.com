import Link from "next/link";
import Logo from "./Logo";

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
                            Premium web design and local SEO for Kennewick, Pasco, and Richland businesses. Built locally in Kennewick.
                        </p>
                        <div className="footer-contact">
                            Kennewick, WA<br />
                            (509) 426-3172<br />
                            <a href="mailto:info@grogan.dev">info@grogan.dev</a>
                        </div>
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
                            <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
                            <li><Link href="/blog" className="footer-link">Blog</Link></li>
                            <li><Link href="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom footer-bottom-content">
                    <p className="footer-copyright">
                        © 2026 Grogan Development Group LLC. All rights reserved.
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
