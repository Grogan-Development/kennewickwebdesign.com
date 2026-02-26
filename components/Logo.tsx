import Link from "next/link";

/**
 * Grogan.dev Wordmark Logo
 *
 * A pure typographic logo where the dot/period is the signature brand element —
 * rendered as a glowing accent-colored dot that anchors the design.
 * "grogan" is bold white, "dev" is lighter weight in a muted tone,
 * and the dot bridges them with a pop of brand color.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
    const size = compact ? "1.1rem" : "1.35rem";

    return (
        <Link
            href="/"
            style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "baseline",
                gap: 0,
            }}
        >
            {/* "grogan" — bold, white, tight tracking */}
            <span
                style={{
                    fontSize: size,
                    fontWeight: 700,
                    color: "var(--color-white)",
                    letterSpacing: "-0.03em",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                }}
            >
                grogan
            </span>

            {/* The dot — the signature element */}
            <span
                style={{
                    display: "inline-block",
                    width: compact ? "5px" : "6px",
                    height: compact ? "5px" : "6px",
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    boxShadow: "0 0 8px var(--color-accent-glow)",
                    margin: "0 1px",
                    verticalAlign: "baseline",
                    position: "relative",
                    bottom: compact ? "2px" : "3px",
                }}
                aria-hidden="true"
            />

            {/* "dev" — lighter weight, muted color */}
            <span
                style={{
                    fontSize: size,
                    fontWeight: 400,
                    color: "var(--color-text-muted)",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                }}
            >
                dev
            </span>
        </Link>
    );
}
