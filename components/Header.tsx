"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = `site-header${isScrolled ? " scrolled" : ""}${isMenuOpen ? " menu-open" : ""}`;

    return (
        <header className={headerClass}>
            <div className="container header-container">
                <Logo />

                <nav className="desktop-nav">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className="nav-link">{label}</Link>
                    ))}
                </nav>

                <div className="header-actions">
                    <Link href="/contact" className="btn btn-primary btn-sm header-btn">
                        Free Audit
                    </Link>

                    <button
                        className="menu-toggle menu-toggle-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-nav-panel${isMenuOpen ? " open" : ""}`}>
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
                        {label}
                    </Link>
                ))}
            </div>
        </header>
    );
}
