import { useEffect } from "react";
import {
    HeroSection,
    AboutSection,
    ProjectsSection,
    // ContactSection,
} from "./components/index";
import Header from "../../components/Header/Header";

export default function Home() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((module) => {
                const sr = module.default();
                sr.reveal(".reveal", {
                    origin: "bottom",
                    distance: "20px",
                    duration: 1000,
                    reset: false,
                    interval: 300,
                });
            });
        }
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
            {/* <Destaques/> */}
            <AboutSection />
            <ProjectsSection />
            {/* <ContactSection /> */}
        </>
    );
}
