import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    alternates: { canonical: "/kennewick" },
    title: "Web Design in Kennewick WA — Local Kennewick Web Expert",
    description:
        "Custom web design for Kennewick businesses that need a stronger first impression, clearer messaging, and a better path to inquiry.",
    openGraph: {
        url: "/kennewick",
        title: "Web Design in Kennewick WA | Kennewick Web Design",
        description: "Custom web design for Kennewick businesses — stronger first impression, clearer messaging, and a better path to inquiry.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design in Kennewick WA | Kennewick Web Design",
        description: "Custom web design for Kennewick businesses that need a stronger first impression.",
    },
};

export default function KennewickPage() {
    return (
        <CityLandingPage
            city="Kennewick"
            h1="Web Design in Kennewick WA"
            description="Custom websites for Kennewick businesses that want a site matching the quality of the business behind it."
            localFact="Kennewick is the heart of the Tri-Cities, with a booming business scene from Columbia Center Mall to the waterfront. Whether you're on Clearwater Ave or Canal Drive, your customers are searching online first."
            neighborhoodMention="We drive the same streets, eat at the same restaurants, and understand what Kennewick customers are looking for."
        />
    );
}
