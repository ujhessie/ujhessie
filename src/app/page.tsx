"use client";

import { useEffect } from 'react';
import { ContactSection, HeroSection, ProjectsSection, Destaques, AboutSection } from "./(components)";

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
        
            <HeroSection />
            <Destaques/>
            <AboutSection/>
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
