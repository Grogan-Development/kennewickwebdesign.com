import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    title: "Web Design in Richland WA — Tri-Cities Website Design",
    description:
        "Custom web design for Richland businesses. Local SEO, lead-generating sites, transparent pricing — from your Kennewick neighbor.",
};

export default function RichlandPage() {
    return (
        <CityLandingPage
            city="Richland"
            h1="Web Design in Richland WA"
            description="Professional websites for Richland businesses — local expertise, transparent pricing, real results."
            localFact="Richland's thriving business community — from the Uptown area to George Washington Way — deserves a web presence that matches the city's energy and growth."
            neighborhoodMention="As your Tri-Cities neighbor in Kennewick, we understand the Richland market and the customers you're trying to reach."
        />
    );
}
