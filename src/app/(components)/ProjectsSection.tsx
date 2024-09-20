"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { IoIosArrowForward } from "react-icons/io";
import CardProject from "@/components/ui/CardProject/CardProject";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { Botao } from "@/components/ui/Botao/Botao";
import { useEffect, useState } from "react";
import { SubtituloTop } from "@/components/ui/Subtitulotop/SubtituloTop";

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
        return () =>
            window.removeEventListener("resize", updateVisibleProjects);
    }, []);

    return (
        <section className='py-16 bg-gradient-to-b  from-preto-claro to-transparent'>
            <MaxWidthContainer className=''>
                <div className='header-projetos flex justify-between items-end mb-4'>
                    <div className='flex flex-col gap-4'>
                        <SubtituloTop>Projetos</SubtituloTop>
                        <h2 className='text-white'>
                            Veja alguns dos meus <span>projetos</span>
                        </h2>
                    </div>
                    <div>
                        <Botao
                            tipo='transparente'
                            rota='/projetos'
                            className='reveal items-center   hidden md:block mb-4 text-white'
                        >
                            Ver mais projetos
                        </Botao>
                    </div>
                </div>
                <div
                    id='div-projetos'
                    className='grid md:grid-cols-2 lg:grid-cols-3 w-full h-full mb-4 gap-4'
                >
                    {projetos.slice(0, visibleProjects).map((projeto) => (
                        <CardProject key={projeto.id} id={projeto.id} />
                    ))}
                </div>

                <div className='flex justify-start text-white'>
                    <Botao rota='/projetos' className='reveal md:hidden  mb-4'>
                        Ver todos os projetos
                    </Botao>
                </div>
            </MaxWidthContainer>
        </section>
    );
};
