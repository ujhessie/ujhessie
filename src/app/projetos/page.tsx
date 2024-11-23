"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Projetos } from "@/components/ui/Projetos/Projetos";
import { SubtituloTop } from "@/components/ui/Subtitulotop/SubtituloTop";
import { useProjetos } from "@/contexts/ProjetosContexts";

export default function ProjetosPage() {
    const { projetos } = useProjetos();
    return (
        <section className='py-32 pt-16'>
            <MaxWidthContainer className='mb-8 relative'>
                <div className='header-portfolio items-end mb-8 text-center'>
                    <div>
                        <SubtituloTop className='my-4'>Portfólio</SubtituloTop>
                        <h2 className='text-white'>
                            Explore alguns dos meus <span>projetos</span>
                        </h2>
                    </div>
                </div>
                <Projetos />
            </MaxWidthContainer>
        </section>
    );
}
