"use client";

import { Botao } from '@/components/ui/Botao/Botao';
import CardProject from '@/components/ui/CardProject/CardProject';
import MaxWidthContainer from '@/components/ui/MaxWidthContainer';
import { Projetos } from '@/components/ui/Projetos/Projetos';
import { useProjetos } from "@/contexts/ProjetosContexts";
import { IoIosArrowForward } from 'react-icons/io';

export default function ProjetosPage() {
    const { projetos } = useProjetos();
    return (
        <MaxWidthContainer className='mb-8'>
            <Projetos/>

        
        </MaxWidthContainer>
    )
}