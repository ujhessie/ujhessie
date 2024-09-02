"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { IoIosArrowForward } from "react-icons/io";
import CardProject from "@/components/ui/CardProject/CardProject";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { Botao } from "@/components/ui/Botao/Botao";
import { useEffect, useState } from "react";

export const ProjectsSection = () => {
    const { projetos } = useProjetos();
    const [visibleProjects, setVisibleProjects] = useState(6);

    // Update visibleProjects based on screen size
    useEffect(() => {
        const updateVisibleProjects = () => {
            if (window.innerWidth < 640) {
                setVisibleProjects(2); 
            } else if (window.innerWidth < 1024) {
                setVisibleProjects(4); 
            } else {
                setVisibleProjects(3); 
            }
        };

        // Initial check
        updateVisibleProjects();

        // Add event listener to handle window resize
        window.addEventListener("resize", updateVisibleProjects);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("resize", updateVisibleProjects);
    }, []);

    return (
        <MaxWidthContainer className='mb-8'>
            <div id='div-projetos' className='grid md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-4'>
                {projetos.slice(0, visibleProjects).map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </div>

            <Botao
                icon={<IoIosArrowForward />}
                rota='/projetos'
                className='reveal mb-4'
            >
                Ver mais projetos
            </Botao>
        </MaxWidthContainer>
    );
};
