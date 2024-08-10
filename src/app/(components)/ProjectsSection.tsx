"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { IoIosArrowForward } from "react-icons/io";
import CardProject from "@/components/ui/CardProject/CardProject";
import { useProjetos } from "@/contexts/ProjetosContexts";

import { Botao } from "@/components/ui/Botao/Botao";

export const ProjectsSection = () => {
    const { projetos } = useProjetos();

    return (
        <MaxWidthContainer>
            <div id='div-projetos' className='projetos w-full h-full gap-4'>
                {projetos.map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </div>

            <Botao
                icon={<IoIosArrowForward />}
                rota='/projetos'
                className='md:hidden reveal mb-16'
            >
                Ver mais projetos
            </Botao>
        </MaxWidthContainer>
    );
};
