import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    title: "Web Design in West Pasco WA — Your Local Web Expert",
    description:
        "Custom web design serving West Pasco, WA. Based in Kennewick — transparent pricing, local SEO, and websites that generate leads for Tri-Cities businesses.",
};

export default function WestPascoPage() {
    return (
        <CityLandingPage
            city="West Pasco"
            h1="Web Design From West Pasco — Your Local Neighbor"
            description="We proudly serve West Pasco businesses from our Kennewick office. Get a website built by someone who's part of your community."
            localFact="West Pasco is part of our core service area. We chose to serve this community because we believe in its growth, and we want to help local businesses thrive online."
            neighborhoodMention="This is where we live, work, and raise our family. When you hire us, you're hiring a neighbor — not a faceless agency."
        />
    );
}
