import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    title: "Web Design in Kennewick WA — Local Kennewick Web Expert",
    description:
        "Custom web design for Kennewick businesses. Local SEO, lead-generating sites, transparent pricing — from your local Kennewick neighbor.",
};

export default function KennewickPage() {
    return (
        <CityLandingPage
            city="Kennewick"
            h1="Web Design in Kennewick WA"
            description="Custom, lead-generating websites for Kennewick businesses — built by a local who knows the market."
            localFact="Kennewick is the heart of the Tri-Cities, with a booming business scene from Columbia Center Mall to the waterfront. Whether you're on Clearwater Ave or Canal Drive, your customers are searching online first."
            neighborhoodMention="We drive the same streets, eat at the same restaurants, and understand what Kennewick customers are looking for."
        />
    );
}
