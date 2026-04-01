import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    alternates: { canonical: "/richland" },
    title: "Web Design in Richland WA — Tri-Cities Website Design",
    description:
        "Custom web design for Richland businesses that need a more credible site, better structure, and stronger local visibility.",
    openGraph: {
        url: "/richland",
        title: "Web Design in Richland WA | Kennewick Web Design",
        description: "Custom web design for Richland businesses — more credible site, better structure, and stronger local visibility.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design in Richland WA | Kennewick Web Design",
        description: "Custom web design for Richland businesses that need stronger local visibility.",
    },
};

export default function RichlandPage() {
    return (
        <CityLandingPage
            city="Richland"
            h1="Web Design in Richland WA"
            description="Professional websites for Richland businesses that need clearer positioning, stronger trust signals, and a site that is easier to use."
            localFact="Richland's thriving business community — from the Uptown area to George Washington Way — deserves a web presence that matches the city's energy and growth."
            neighborhoodMention="As your Tri-Cities neighbor in Kennewick, we understand the Richland market and the customers you're trying to reach."
        />
    );
}
