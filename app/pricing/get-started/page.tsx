"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { pricingPackages } from "@/lib/data";
import {
    Globe,
    Pencil,
    ShoppingCart,
    MapPin,
    Settings,
    Lightbulb,
    ArrowRight,
    Check
} from "lucide-react";

/* ─────────────────────────────────────────────
   Plan badge colours
   ───────────────────────────────────────────── */
const planMeta: Record<string, { label: string; color: string; bg: string }> = {
    starter: { label: "Starter — $750", color: "var(--color-primary)", bg: "rgba(0,71,195,0.2)" },
    growth: { label: "Growth — $1,250", color: "var(--color-accent)", bg: "rgba(245,158,11,0.15)" },
    premium: { label: "Premium — $2,500", color: "#a855f7", bg: "rgba(168,85,247,0.15)" },
    custom: { label: "Custom Solution", color: "var(--color-accent)", bg: "rgba(245,158,11,0.15)" },
};

/* ─────────────────────────────────────────
   Steps config
   ───────────────────────────────────────── */
const projectTypes = [
    { id: "new-website", icon: <Globe size={20} />, label: "New Website" },
    { id: "redesign", icon: <Pencil size={20} />, label: "Website Redesign" },
    { id: "ecommerce", icon: <ShoppingCart size={20} />, label: "E-commerce Store" },
    { id: "local-seo", icon: <MapPin size={20} />, label: "Local SEO" },
    { id: "web-app", icon: <Settings size={20} />, label: "Web Application" },
    { id: "other", icon: <Lightbulb size={20} />, label: "Other / Unsure" },
];

const budgetRanges = [
    { id: "under-1k", label: "Under $1,000" },
    { id: "1k-3k", label: "$1,000 – $3,000" },
    { id: "3k-5k", label: "$3,000 – $5,000" },
    { id: "5k-plus", label: "$5,000+" },
    { id: "unsure", label: "Not sure yet" },
];

const timelineOptions = [
    { id: "asap", label: "ASAP" },
    { id: "2-weeks", label: "2 weeks" },
    { id: "1-month", label: "1 month" },
    { id: "flexible", label: "Flexible" },
];

function GetStartedForm() {
    const searchParams = useSearchParams();
    const planParam = searchParams.get("plan") || "";
    const meta = planMeta[planParam] || null;

    /* ── form state ── */
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [projectType, setProjectType] = useState("");
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [business, setBusiness] = useState("");
    const [website, setWebsite] = useState("");
    const [submitted, setSubmitted] = useState(false);

    /* Pre-select budget from plan */
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (planParam === "starter") setBudget("under-1k");
         
        else if (planParam === "growth") setBudget("1k-3k");
         
        else if (planParam === "premium") setBudget("3k-5k");
    }, [planParam]);

    const canAdvance = () => {
        if (step === 1) return projectType !== "";
        if (step === 2) return budget !== "" && timeline !== "";
        if (step === 3) return description.trim().length > 0;
        if (step === 4) return name.trim() && email.trim();
        return false;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Replace with actual form submission endpoint
        setSubmitted(true);
    };

    /* ─────────────────────────────
       SUCCESS STATE
       ───────────────────────────── */
    if (submitted) {
        return (
            <div className="get-started-shell">
                <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0 }}></div>
                <div className="aurora-glow accent" style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }}></div>
                <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }}>
                    <div style={{ fontSize: "4rem", marginBottom: 24 }}>
                        <div style={{ background: "var(--color-primary-glow)", width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", border: "1px solid var(--color-primary)" }}>
                            <Check size={40} color="var(--color-primary)" />
                        </div>
                    </div>
                    <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: 16 }}>
                        We Got Your Details!
                    </h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-lg)", maxWidth: 520, margin: "0 auto 32px" }}>
                        We&apos;ll review your project and reach out within 24 hours. No pressure, no obligations.
                    </p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/" className="btn btn-primary">Back to Home</Link>
                        <Link href="/pricing" className="btn btn-outline">View Plans</Link>
                    </div>
                </div>
            </div>
        );
    }

    /* ─────────────────────────────
       MAIN FORM LAYOUT
       ───────────────────────────── */
    return (
        <div className="get-started-shell">
            <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0 }}></div>
            <div className="aurora-glow accent" style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", opacity: 0.12 }}></div>

            {/* ═══ TOP BAR ═══ */}
            <div className="get-started-top">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <Link
                        href="/pricing"
                        style={{
                            color: "var(--color-text-dim)",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontWeight: 600,
                            fontSize: "var(--font-size-xs)",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                        }}
                    >
                        <span>←</span> Pricing
                    </Link>
                    {meta && (
                        <span
                            style={{
                                background: meta.bg,
                                color: meta.color,
                                padding: "4px 14px",
                                borderRadius: "var(--radius-full)",
                                fontSize: "var(--font-size-xs)",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                            }}
                        >
                            {meta.label}
                        </span>
                    )}
                </div>

                {/* Progress bar - Fixed Spacing */}
                <div style={{ display: "flex", alignItems: "center", marginTop: 20, position: "relative" }}>
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div key={i} style={{ flex: i < totalSteps - 1 ? 1 : "0 0 auto", display: "flex", alignItems: "center" }}>
                            <div
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 800,
                                    fontSize: "var(--font-size-xs)",
                                    background: step > i + 1 ? "var(--color-primary)" : step === i + 1 ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)",
                                    color: step >= i + 1 ? "var(--color-white)" : "var(--color-text-dim)",
                                    border: step === i + 1 ? "2px solid var(--color-primary)" : "2px solid transparent",
                                    transition: "all 0.3s ease",
                                    flexShrink: 0,
                                    position: "relative",
                                    zIndex: 2
                                }}
                            >
                                {step > i + 1 ? <Check size={16} /> : i + 1}
                            </div>
                            {i < totalSteps - 1 && (
                                <div
                                    style={{
                                        flex: 1,
                                        height: 2,
                                        background: step > i + 1 ? "var(--color-primary)" : "rgba(255,255,255,0.08)",
                                        transition: "background 0.3s",
                                        margin: "0 -2px",
                                        position: "relative",
                                        zIndex: 1
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══ FORM BODY ═══ */}
            <div className="get-started-body">
                <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 640 }}>
                    {/* ─── STEP 1: Project Type ─── */}
                    {step === 1 && (
                        <div>
                            <h2 className="get-started-step-title">
                                What do you need help with?
                            </h2>
                            <p className="get-started-step-desc">
                                Pick the option that best describes your project.
                            </p>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                                    gap: 12,
                                }}
                            >
                                {projectTypes.map((t) => (
                                    <button
                                        type="button"
                                        key={t.id}
                                        onClick={() => setProjectType(t.id)}
                                        className="get-started-option"
                                        data-selected={projectType === t.id || undefined}
                                    >
                                        <span style={{ color: projectType === t.id ? "var(--color-primary)" : "var(--color-text-dim)" }}>
                                            {t.icon}
                                        </span>
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ─── STEP 2: Budget & Timeline ─── */}
                    {step === 2 && (
                        <div>
                            <h2 className="get-started-step-title">Budget &amp; Timeline</h2>
                            <p className="get-started-step-desc">
                                Helps us recommend the right approach. No hard commitments.
                            </p>

                            <h3 style={{ fontSize: "var(--font-size-sm)", marginBottom: 14, color: "var(--color-text-main)", fontWeight: 700 }}>
                                What&apos;s your budget range?
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                                {budgetRanges.map((b) => (
                                    <button
                                        type="button"
                                        key={b.id}
                                        onClick={() => setBudget(b.id)}
                                        className="get-started-pill"
                                        data-selected={budget === b.id || undefined}
                                    >
                                        {b.label}
                                    </button>
                                ))}
                            </div>

                            <h3 style={{ fontSize: "var(--font-size-sm)", marginBottom: 14, color: "var(--color-text-main)", fontWeight: 700 }}>
                                When do you need it done?
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {timelineOptions.map((t) => (
                                    <button
                                        type="button"
                                        key={t.id}
                                        onClick={() => setTimeline(t.id)}
                                        className="get-started-pill"
                                        data-selected={timeline === t.id || undefined}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ─── STEP 3: Project Description ─── */}
                    {step === 3 && (
                        <div>
                            <h2 className="get-started-step-title">Tell us about your project</h2>
                            <p className="get-started-step-desc">
                                What does your business do? What are you hoping to achieve?
                            </p>
                            <textarea
                                rows={5}
                                placeholder="E.g. We're a plumbing company in Kennewick and need a website that generates leads from local search..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-input"
                                style={{
                                    width: "100%",
                                    resize: "vertical",
                                    minHeight: 140,
                                    fontSize: "var(--font-size-sm)",
                                    lineHeight: 1.7,
                                }}
                            />
                        </div>
                    )}

                    {/* ─── STEP 4: Contact Info ─── */}
                    {step === 4 && (
                        <div>
                            <h2 className="get-started-step-title">How do we reach you?</h2>
                            <p className="get-started-step-desc">
                                We&apos;ll reply within 24 hours. No spam, no sales pitch.
                            </p>
                            <div style={{ display: "grid", gap: 18 }}>
                                <div className="get-started-row">
                                    <div>
                                        <label className="form-label">Full Name *</label>
                                        <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Zackariah Grogan" required />
                                    </div>
                                    <div>
                                        <label className="form-label">Business Name</label>
                                        <input type="text" className="form-input" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Your Business LLC" />
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Email *</label>
                                    <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourbusiness.com" required />
                                </div>
                                <div className="get-started-row">
                                    <div>
                                        <label className="form-label">Phone</label>
                                        <input type="tel" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(509) 426-3172" />
                                    </div>
                                    <div>
                                        <label className="form-label">Current Website</label>
                                        <input type="url" className="form-input" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://yourbusiness.com" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            {/* ═══ BOTTOM BAR ═══ */}
            <div className="get-started-bottom">
                {/* Plan summary (compact) */}
                {meta && planParam !== "custom" && (() => {
                    const pkg = pricingPackages.find((p) => p.name.toLowerCase() === planParam);
                    if (!pkg) return null;
                    return (
                        <div className="get-started-plan-bar">
                            <span style={{ fontWeight: 800, color: "var(--color-white)" }}>{pkg.name}</span>
                            <span style={{ fontWeight: 700, color: meta.color, marginLeft: 8 }}>{pkg.price}</span>
                            <span style={{ color: "var(--color-text-dim)", fontSize: "var(--font-size-xs)", marginLeft: "auto" }}>
                                {pkg.timeline}
                            </span>
                        </div>
                    );
                })()}

                {/* Navigation buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: step > 1 ? "space-between" : "flex-end",
                        gap: 16,
                    }}
                >
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="btn btn-outline"
                        >
                            ← Back
                        </button>
                    )}
                    {step < totalSteps ? (
                        <button
                            type="button"
                            onClick={() => canAdvance() && setStep(step + 1)}
                            className="btn btn-primary"
                            disabled={!canAdvance()}
                            style={{ opacity: canAdvance() ? 1 : 0.4 }}
                        >
                            Next Step <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit as unknown as () => void}
                            className="btn btn-accent btn-lg"
                            disabled={!canAdvance()}
                            style={{ opacity: canAdvance() ? 1 : 0.4 }}
                        >
                            Submit <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function GetStartedPage() {
    return (
        <Suspense fallback={
            <div className="get-started-shell">
                <div style={{ textAlign: "center" }}>
                    <p style={{ color: "var(--color-text-muted)" }}>Loading...</p>
                </div>
            </div>
        }>
            <GetStartedForm />
        </Suspense>
    );
}
