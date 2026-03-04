"use client";

import { useState } from "react";
import { submitInquiry, type ManualContactDetails } from "@/lib/inquiries";
import { site } from "@/lib/site";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [manualContact, setManualContact] = useState<ManualContactDetails | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        website: "",
        message: "",
        company: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setErrorMessage("");
        setManualContact(null);

        const response = await submitInquiry({
            source: "contact",
            name: form.name,
            email: form.email,
            phone: form.phone,
            business: form.businessType,
            website: form.website,
            message: form.message,
            company: form.company,
            page: window.location.pathname,
            referrer: document.referrer || undefined,
        });

        setIsSubmitting(false);

        if (response.ok) {
            setSubmitted(true);
            return;
        }

        setErrorMessage(
            response.message ||
            "We could not submit your message automatically. Use the backup contact details below.",
        );
        setManualContact(response.manualContact ?? null);
    };

    if (submitted) {
        return (
            <div className="form-success">
                <div className="form-success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--spacing-4)", color: "var(--color-white)" }}>Message Sent</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-lg)", lineHeight: 1.6 }}>
                    Thanks for reaching out. We&apos;ll review your message and reply within one business day.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="two-col" style={{ gap: "var(--spacing-6)" }}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@business.com"
                        value={form.email}
                        onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                    />
                </div>
            </div>

            <div className="two-col" style={{ gap: "var(--spacing-6)" }}>
                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                        className="form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={site.phoneDisplay}
                        value={form.phone}
                        onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="business-type">What type of business?</label>
                    <select
                        className="form-select"
                        id="business-type"
                        name="businessType"
                        value={form.businessType}
                        onChange={(e) => setForm((current) => ({ ...current, businessType: e.target.value }))}
                    >
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
                <input
                    className="form-input"
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yourbusiness.com"
                    value={form.website}
                    onChange={(e) => setForm((current) => ({ ...current, website: e.target.value }))}
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    required
                    placeholder="What are you looking for? A new site, a redesign, SEO help? Give us the details..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                />
            </div>

            <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    value={form.company}
                    onChange={(e) => setForm((current) => ({ ...current, company: e.target.value }))}
                />
            </div>

            {(errorMessage || manualContact) && (
                <div
                    style={{
                        marginBottom: "var(--spacing-6)",
                        padding: "1rem 1.1rem",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        background: "rgba(245, 158, 11, 0.08)",
                    }}
                >
                    <p style={{ margin: 0, color: "var(--color-white)", fontWeight: 600 }}>
                        {errorMessage}
                    </p>
                    {manualContact && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 14 }}>
                            <a href={manualContact.mailto} className="btn btn-outline btn-sm">
                                Email {manualContact.email}
                            </a>
                            <a href={`tel:${site.phoneHref}`} className="btn btn-outline btn-sm">
                                Call {manualContact.phone}
                            </a>
                        </div>
                    )}
                </div>
            )}

            <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
