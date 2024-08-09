"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";
import CardProject from "@/components/ui/CardProject/CardProject";
import { HeroSection } from '@/components/home';
import { Botao } from '@/components/ui/Botao/Botao';
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";

export default function Home() {
    const { projetos } = useProjetos();

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            reset: true,
        });
    }, []);

    // Ordenar os projetos de forma aleatória
    const projetosAleatorios = [...projetos].sort(() => Math.random() - 0.5);

    return (
        <>
            <HeroSection />
            <MaxWidthContainer className='reveal'>
                <div id="div-projetos" className='projetos w-full h-full gap-4'>
                    {projetosAleatorios.map((projeto) => (
                        <CardProject key={projeto.id} id={projeto.id} />
                    ))}
                </div>
                <Botao icon={<IoIosArrowForward />} rota='/projetos' className="md:hidden reveal mb-16">
                    Ver mais projetos
                </Botao>
            </MaxWidthContainer>
        </>
    );
}
