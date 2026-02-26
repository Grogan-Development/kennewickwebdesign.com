"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div>
            {faqs.map((faq, i) => (
                <div className="faq-item" key={i}>
                    <button
                        className="faq-question"
                        onClick={() => toggle(i)}
                        aria-expanded={openIndex === i}
                    >
                        {faq.question}
                        <span className="faq-icon">+</span>
                    </button>
                    <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
