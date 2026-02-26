"use client";

import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="form-success">
                <div className="form-success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--spacing-4)", color: "var(--color-white)" }}>Message Sent</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-lg)", lineHeight: 1.6 }}>
                    Thanks for reaching out! We&apos;ve received your message and will get back to you within one business day.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="two-col" style={{ gap: "var(--spacing-6)" }}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input className="form-input" type="text" id="name" name="name" required placeholder="John Smith" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input className="form-input" type="email" id="email" name="email" required placeholder="john@business.com" />
                </div>
            </div>

            <div className="two-col" style={{ gap: "var(--spacing-6)" }}>
                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input className="form-input" type="tel" id="phone" name="phone" placeholder="(509) 426-3172" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="business-type">What type of business?</label>
                    <select className="form-select" id="business-type" name="businessType">
                        <option value="">Select your industry...</option>
                        <option value="contractor">Contractor / Home Services</option>
                        <option value="winery">Winery / Tasting Room</option>
                        <option value="healthcare">Healthcare / Dental</option>
                        <option value="restaurant">Restaurant / Food Service</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="website">Current Website (if any)</label>
                <input className="form-input" type="url" id="website" name="website" placeholder="https://yourbusiness.com" />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                <textarea className="form-textarea" id="message" name="message" required placeholder="What are you looking for? A new site, a redesign, SEO help? Give us the details..." rows={5} />
            </div>

            <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                {isSubmitting ? "Sending..." : "Send Message & Get Free Audit"}
            </button>
        </form>
    );
}
