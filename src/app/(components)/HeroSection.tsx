"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "@/components/ui/Botao/Botao";

import { RedesSociais } from '@/components/ui/RedesSociais/RedesSociais';

export const HeroSection = () => {

    

    return (
        <MaxWidthContainer className='text-center py-32 reveal'>
            <div className='pb-24'>
                <span className='text-white border px-2 py-1 text-[14px] md:text-[16px] lg:text-[18px] opacity-85 rounded-full mb-4 font-medium  lg:px-6  md:px-4    inline-block'>
                    Olá! Bem vindo(a)!
                </span>
                <h1 className='uppercase reveal text-white'>Jesse Rodrigues</h1>
                <p className='subtitulo reveal texto-gradiente font-bold fonte-titulo mb-4 text-2xl lg:text-3xl'>
                    Desenvolvedor Web
                </p>

                <RedesSociais />

                <div className='botoes reveal flex justify-center gap-4'>
                    <Botao className='reveal' rota='#div-projetos'>
                        Projetos
                    </Botao>
                    {/* <Botao tipo='transparente'>Sobre</Botao> */}
                </div>
            </div>
        </MaxWidthContainer>
    );
};
