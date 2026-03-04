import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
    alternates: { canonical: "/pasco" },
    title: "Web Design in Pasco WA — Tri-Cities Website Design",
    description:
        "Custom web design for Pasco businesses that need stronger credibility online, clearer messaging, and a better local search foundation.",
};

export default function PascoPage() {
    return (
        <CityLandingPage
            city="Pasco"
            h1="Web Design in Pasco WA"
            description="Custom websites for Pasco businesses that need a cleaner web presence and a more effective path from search visit to inquiry."
            localFact="Pasco is growing fast — one of the fastest-growing cities in Washington. From the Farmer's Market to the commercial corridor on Road 68, businesses are booming. Make sure your online presence keeps up."
            neighborhoodMention="We're based in Kennewick. This is our home, and we're invested in helping Pasco businesses succeed online."
        />
    );
}
