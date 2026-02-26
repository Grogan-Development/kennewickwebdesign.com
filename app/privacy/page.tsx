import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for Grogan Development Group LLC — Kennewick Web Design. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "February 25, 2026";

    return (
        <>
            <section className="page-hero" style={{ paddingBottom: "var(--spacing-8)" }}>
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <h1>Privacy Policy</h1>
                    <p style={{ color: "var(--color-text-muted)" }}>Last updated: {lastUpdated}</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: "var(--spacing-8)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="card" style={{ padding: "var(--spacing-10)" }}>
                        <div className="legal-content" style={{ color: "var(--color-text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>

                            <p style={{ marginBottom: "2rem" }}>
                                Grogan Development Group LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
                                grogan.dev (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose,
                                and safeguard your information when you visit our Site or engage our services.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>1. Information We Collect</h2>

                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Personal Information</h3>
                            <p style={{ marginBottom: "1rem" }}>
                                When you contact us through our website, request a free audit, or engage our services,
                                we may collect the following information:
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Full name</li>
                                <li style={{ marginBottom: "0.5rem" }}>Email address</li>
                                <li style={{ marginBottom: "0.5rem" }}>Phone number</li>
                                <li style={{ marginBottom: "0.5rem" }}>Business name and website URL</li>
                                <li style={{ marginBottom: "0.5rem" }}>Project details and requirements</li>
                            </ul>

                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Automatically Collected Information</h3>
                            <p style={{ marginBottom: "1.5rem" }}>
                                When you visit our Site, we may automatically collect certain information about your
                                device and usage, including your IP address, browser type, operating system, referring
                                URLs, pages viewed, and the dates/times of your visits. This information is collected
                                through cookies and similar tracking technologies.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>2. How We Use Your Information</h2>
                            <p style={{ marginBottom: "1rem" }}>We use the information we collect to:</p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Respond to your inquiries and provide customer support</li>
                                <li style={{ marginBottom: "0.5rem" }}>Deliver and manage our web design and development services</li>
                                <li style={{ marginBottom: "0.5rem" }}>Send you project updates, invoices, and service-related communications</li>
                                <li style={{ marginBottom: "0.5rem" }}>Improve and optimize our Site and services</li>
                                <li style={{ marginBottom: "0.5rem" }}>Comply with legal obligations</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>3. Information Sharing</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We do not sell, trade, or rent your personal information to third parties. We may share
                                your information only in the following circumstances:
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist us in operating our business (e.g., hosting providers, payment processors, analytics tools).</li>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Legal Compliance:</strong> We may disclose information if required by law, subpoena, or other legal process.</li>
                                <li style={{ marginBottom: "0.5rem" }}><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                            </ul>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>4. Cookies &amp; Tracking</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Our Site may use cookies and similar technologies to enhance your browsing experience,
                                analyze site traffic, and understand where our visitors come from. You can control cookie
                                preferences through your browser settings. Disabling cookies may affect certain features
                                of the Site.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>5. Data Security</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We implement commercially reasonable technical and organizational measures to protect
                                your personal information from unauthorized access, disclosure, alteration, or destruction.
                                However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>6. Third-Party Links</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Our Site may contain links to third-party websites. We are not responsible for the
                                privacy practices or content of those external sites. We encourage you to read the
                                privacy policies of any third-party sites you visit.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>7. Your Rights</h2>
                            <p style={{ marginBottom: "1rem" }}>Depending on your jurisdiction, you may have the right to:</p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Access, correct, or delete your personal information</li>
                                <li style={{ marginBottom: "0.5rem" }}>Opt out of marketing communications</li>
                                <li style={{ marginBottom: "0.5rem" }}>Request a copy of the data we hold about you</li>
                            </ul>
                            <p style={{ marginBottom: "1.5rem" }}>
                                To exercise any of these rights, please contact us at{" "}
                                <a href="mailto:info@grogan.dev">info@grogan.dev</a>.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>8. Children&apos;s Privacy</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Our Site and services are not directed at individuals under the age of 13. We do not
                                knowingly collect personal information from children. If we become aware that we have
                                collected information from a child under 13, we will take steps to delete it promptly.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>9. Changes to This Policy</h2>
                            <p style={{ marginBottom: "1.5rem" }}>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this
                                page with an updated &quot;Last updated&quot; date. We encourage you to review this policy
                                periodically.
                            </p>

                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem" }}>10. Contact Us</h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at:
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
