"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { site } from "@/lib/site";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

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
                        <Link
                            key={href}
                            href={href}
                            className={`nav-link${pathname === href ? " active" : ""}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions">
                    <Link href="/contact" className="btn btn-primary btn-sm header-btn">
                        {site.primaryCtaLabel}
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
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
                    Home
                </Link>
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
                        {label}
                    </Link>
                ))}
            </div>
        </header>
    );
}
