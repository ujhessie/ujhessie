"use client";

import { Botao } from '@/components/ui/Botao/Botao';
import CardProject from '@/components/ui/CardProject/CardProject';
import MaxWidthContainer from '@/components/ui/MaxWidthContainer';
import { useProjetos } from "@/contexts/ProjetosContexts";
import { IoIosArrowForward } from 'react-icons/io';

export default function ProjetosPage() {
    const { projetos } = useProjetos();
    return (
        <MaxWidthContainer className='mb-8'>
            <div id='div-projetos' className='grid md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-4'>
                {projetos.map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </div>

        
        </MaxWidthContainer>
    )
}