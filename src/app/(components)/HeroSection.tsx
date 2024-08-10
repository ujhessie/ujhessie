"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "@/components/ui/Botao/Botao";

export const HeroSection = () => {
    return (
        <MaxWidthContainer className='text-center py-40'>
            <div className='pb-32'>
                <h1 className='uppercase reveal text-white'>Jesse Rodrigues</h1>
                <p className='subtitulo reveal texto-gradiente font-bold fonte-titulo mb-8 text-2xl lg:text-3xl'>
                    Desenvolvedor Web
                </p>

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
