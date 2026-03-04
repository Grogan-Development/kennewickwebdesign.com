import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ compact = false }: { compact?: boolean }) {
    const titleSize = compact ? "0.92rem" : "1rem";
    const subtitleSize = compact ? "0.62rem" : "0.68rem";

    return (
        <Link
            href="/"
            style={{
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                gap: 2,
                lineHeight: 1,
            }}
            aria-label={site.name}
        >
            <span
                style={{
                    fontSize: titleSize,
                    fontWeight: 700,
                    color: "var(--color-white)",
                    letterSpacing: "-0.03em",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                }}
            >
                Kennewick
            </span>
            <span
                style={{
                    fontSize: subtitleSize,
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                }}
            >
                Web Design
            </span>
        </Link>
    );
}
