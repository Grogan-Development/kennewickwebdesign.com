import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    alternates: { canonical: "/west-pasco" },
    title: "Web Design in West Pasco WA — Your Local Web Expert",
    description:
        "Custom web design serving West Pasco businesses that need better credibility online, clearer messaging, and a direct local partner.",
    openGraph: {
        url: "/west-pasco",
        title: "Web Design in West Pasco WA | Kennewick Web Design",
        description: "Custom web design for West Pasco businesses — better credibility online and a direct local partner.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design in West Pasco WA | Kennewick Web Design",
        description: "Custom web design for West Pasco businesses from your local neighbor.",
    },
};

export default function WestPascoPage() {
    return (
        <CityLandingPage
            city="West Pasco"
            h1="Web Design From West Pasco — Your Local Neighbor"
            description="We work with West Pasco businesses that want a better website, clearer structure, and direct communication from a local partner."
            localFact="West Pasco is part of our core service area. We chose to serve this community because we believe in its growth, and we want to help local businesses thrive online."
            neighborhoodMention="This is where we live, work, and raise our family. When you hire us, you're hiring a neighbor — not a faceless agency."
        />
    );
}
