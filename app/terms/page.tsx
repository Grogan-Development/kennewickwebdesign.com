import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service for Grogan Development Group LLC — Kennewick Web Design. Review our terms for web design and development services.",
};

export default function TermsOfServicePage() {
    const lastUpdated = "February 25, 2026";

    return (
        <>
            <section className="page-hero" style={{ paddingBottom: "var(--spacing-8)" }}>
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <h1>Terms of Service</h1>
                    <p style={{ color: "var(--color-text-muted)" }}>Last updated: {lastUpdated}</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: "var(--spacing-8)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="card" style={{ padding: "var(--spacing-10)" }}>
                        <div className="legal-content" style={{ color: "var(--color-text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>

                            <p style={{ marginBottom: "2rem" }}>
                                These Terms of Service (&quot;Terms&quot;) govern your use of the grogan.dev website (the &quot;Site&quot;)
                                and the web design, development, and related services (&quot;Services&quot;) provided by
                                Grogan Development Group LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                                a Washington State limited liability company based in Kennewick, WA.
                                By accessing the Site or engaging our Services, you agree to be bound by these Terms.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>1. Services</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We provide custom web design, web development, local SEO, and ongoing website
                                care plan services for businesses. The specific scope of work, deliverables,
                                timelines, and pricing for each project will be outlined in a separate written
                                proposal or service agreement between you and the Company.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>2. Client Responsibilities</h2>
                            <p style={{ marginBottom: "1rem" }}>As a client, you agree to:</p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Provide accurate and complete information, content, and materials necessary for your project in a timely manner</li>
                                <li style={{ marginBottom: "0.5rem" }}>Review and provide feedback on deliverables within agreed-upon timeframes</li>
                                <li style={{ marginBottom: "0.5rem" }}>Ensure that all content you provide does not infringe on any third-party intellectual property rights</li>
                                <li style={{ marginBottom: "0.5rem" }}>Make payments according to the agreed-upon schedule</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>3. Payment Terms</h2>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>A non-refundable deposit (typically 50%) is required before work begins, unless otherwise agreed in writing.</li>
                                <li style={{ marginBottom: "0.5rem" }}>The remaining balance is due upon project completion, prior to the final handoff or site launch.</li>
                                <li style={{ marginBottom: "0.5rem" }}>For ongoing care plans, recurring fees are billed monthly or annually as outlined in your service agreement.</li>
                                <li style={{ marginBottom: "0.5rem" }}>Late payments may incur a fee of 1.5% per month on the outstanding balance.</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>4. Intellectual Property</h2>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Client Content:</strong> You retain all rights to the content, images, and materials you provide to us.</li>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Deliverables:</strong> Upon full payment, you will own the final website design and custom code created specifically for your project.</li>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Third-Party Assets:</strong> Any third-party fonts, stock images, plugins, or frameworks used in your project remain subject to their respective licenses.</li>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Portfolio Rights:</strong> We reserve the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>5. Project Timelines</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We will make reasonable efforts to complete projects within the estimated timeline.
                                However, timelines may be affected by factors including delays in receiving client
                                content or feedback, scope changes, or unforeseen technical challenges. We are not
                                liable for delays caused by circumstances beyond our reasonable control.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>6. Revisions &amp; Scope Changes</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Each project includes a defined number of revision rounds as specified in your proposal.
                                Additional revisions or changes to the project scope beyond the original agreement may
                                incur additional fees, which will be communicated and approved by you before work proceeds.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>7. Cancellation &amp; Refunds</h2>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>The initial deposit is non-refundable as it covers discovery, planning, and design initiation.</li>
                                <li style={{ marginBottom: "0.5rem" }}>If you cancel a project mid-development, you will be invoiced for all work completed to date.</li>
                                <li style={{ marginBottom: "0.5rem" }}>Care plan subscriptions may be cancelled with 30 days&apos; written notice.</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>8. Warranties &amp; Disclaimers</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We provide a 30-day post-launch support period during which we will fix any bugs
                                or issues directly related to the work we delivered. Beyond this period, additional
                                support or modifications will be billed separately or covered under an active care plan.
                            </p>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Our Services are provided &quot;as is.&quot; We do not guarantee specific business results,
                                search engine rankings, or traffic increases. While we follow industry best practices
                                for SEO and performance, results depend on many external factors beyond our control.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>9. Limitation of Liability</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                To the maximum extent permitted by law, Grogan Development Group LLC shall not be
                                liable for any indirect, incidental, special, consequential, or punitive damages,
                                or any loss of profits or revenues, whether incurred directly or indirectly, arising
                                from your use of our Services. Our total liability shall not exceed the total amount
                                paid by you for the specific service giving rise to the claim.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>10. Indemnification</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                You agree to indemnify and hold harmless Grogan Development Group LLC from any
                                claims, losses, damages, liabilities, and expenses (including attorney&apos;s fees) arising
                                from your use of the Services, your content, or your violation of these Terms.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>11. Governing Law</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                These Terms are governed by the laws of the State of Washington. Any disputes arising from
                                these Terms or our Services shall be resolved in the courts of Benton County, Washington.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>12. Changes to These Terms</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We reserve the right to update these Terms at any time. Changes will be posted on this
                                page with an updated &quot;Last updated&quot; date. Continued use of the Site or Services after
                                changes constitutes acceptance of the revised Terms.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>13. Contact Us</h2>
                            <p>
                                If you have questions about these Terms of Service, please contact us:
                            </p>
                            <p style={{ marginTop: "1rem" }}>
                                <strong>Grogan Development Group LLC</strong><br />
                                Kennewick, WA 99336<br />
                                <a href="mailto:info@grogan.dev">info@grogan.dev</a><br />
                                (509) 426-3172
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
