"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";
import CardProject from "@/components/ui/CardProject/CardProject";
import Link from "next/link";

export default function Home() {
    const { projetos } = useProjetos();

    return (
        <>
            <MaxWidthContainer className='projetos w-full h-full mb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {projetos.map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </MaxWidthContainer>
        </>
    );
}
