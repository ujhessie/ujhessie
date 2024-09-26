"use client";

import { Botao } from "@/components/ui/Botao/Botao";
import CardProject from "@/components/ui/CardProject/CardProject";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Projetos } from "@/components/ui/Projetos/Projetos";
import { SubtituloTop } from "@/components/ui/Subtitulotop/SubtituloTop";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { IoIosArrowForward } from "react-icons/io";

export default function ProjetosPage() {
    const { projetos } = useProjetos();
    return (
        <section className='py-32 pt-16'>
          
            <MaxWidthContainer className='mb-8'>
                <div className='header-portfolio items-end mb-8 text-center'>
                    <div>
                        <SubtituloTop>Portfólio</SubtituloTop>
                        <h2 className='text-white   '>
                            Explore alguns dos meus <span>projetos</span>
                        </h2>
                    </div>
                   
                </div>
                <Projetos />
            </MaxWidthContainer>
        </section>
    );
}
