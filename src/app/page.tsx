"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";
import CardProject from "@/components/ui/CardProject/CardProject";
import Link from "next/link";
import { HeroSection } from '@/components/home';

export default function Home() {
    const { projetos } = useProjetos();

    return (
        <>
            <HeroSection/>
            <MaxWidthContainer id="div-rojetos" className='projetos w-full h-full mb-16  gap-4'>
                {projetos.map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </MaxWidthContainer>
        </>
    );
}
