import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    title: "Web Design in Pasco WA — Tri-Cities Website Design",
    description:
        "Custom web design for Pasco businesses. Local SEO, lead-generating sites, transparent pricing — from your Kennewick neighbor.",
};

export default function PascoPage() {
    return (
        <CityLandingPage
            city="Pasco"
            h1="Web Design in Pasco WA"
            description="Custom websites for Pasco businesses — built by a local Kennewick expert who knows your customers."
            localFact="Pasco is growing fast — one of the fastest-growing cities in Washington. From the Farmer's Market to the commercial corridor on Road 68, businesses are booming. Make sure your online presence keeps up."
            neighborhoodMention="We're based in Kennewick. This is our home, and we're invested in helping Pasco businesses succeed online."
        />
    );
}
