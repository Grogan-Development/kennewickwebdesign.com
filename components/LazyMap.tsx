"use client";

import { useState, useRef, useEffect } from "react";

interface LazyMapProps {
    src: string;
    title: string;
}

export default function LazyMap({ src, title }: LazyMapProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "300px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--color-glass-border)",
                background: "var(--color-dark-surface)",
            }}
        >
            {isVisible ? (
                <iframe
                    src={src}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                />
            ) : (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "var(--color-text-dim)",
                    fontSize: "var(--font-size-sm)",
                }}>
                    Loading map...
                </div>
            )}
        </div>
    );
}
