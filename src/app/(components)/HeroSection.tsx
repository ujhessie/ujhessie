/* eslint-disable @next/next/no-img-element */
"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "@/components/ui/Botao/Botao";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { useMemo } from "react";

export const HeroSection = () => {
    return (
        <section className=' relative  overflow-hidden -mt-[230px] '>
            <div className='div-content-projetos-sec-inicio right-1/2  absolute translate-x-1/2 w-full h-full  '>
                <Bg_projetos />
            </div>
            <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-r from-preto-escuro/50 to-transparent'></div>
            <MaxWidthContainer className=' py-32 pt-[330px]  gap-4 grid '>
                <Div_text />
                {/* <div className='imgs-projetos relative  bg-clip-content h-full w-full '></div> */}
            </MaxWidthContainer>
        </section>
    );
};

const Div_text = () => {
    const Subtitulo_top = () => {
        return (
            <div className='subtitulo flex gap-2  items-center'>
                <div className='circle w-3 h-3 bg-gradient-principal rounded-full'></div>
                <p className='inline-block text-base text-azul-acinzentado'>
                    Olá! Bem vindos!
                </p>
            </div>
        );
    };

    const IconRedeSocial = ({
        icon,
        url = "#",
    }: {
        icon: React.ReactNode;
        url?: string;
    }) => {
        return (
            <Link
                className='p-3 my-transition bg-gradient-principal/10 hover:bg-gradient-principal hover:scale-110 rounded-full '
                href={url}
            >
                {icon}
            </Link>
        );
    };

    return (
        <div className='text-white flex flex-col justify-start gap-2 '>
            <Subtitulo_top />
            <h1 className='m-0 leading-none'>jesse rodrigues</h1>
            <span className='bg-gradient-principal inline-block text-3xl  md:text-5xl lg:text-6xl font-titulo -mt-2  bg-clip-text text-transparent'>
                Desenvolvedor & designer
            </span>
            <p className='text-azul-acinzentado lg:w-[60%]'>
                É muito bom te ver por aqui. Fique a vontade e
                <strong>explore meus projetos</strong> e um pouco
                <strong>sobre mim</strong>. Qualquer dúvida é só entrar em
                contato comigo.
            </p>
            <div className='div-botoes flex gap-2'>
                <Botao>Ver Projetos</Botao>
                <Botao tipo='transparente'>Sobre Mim</Botao>
            </div>
            <div className='icons-redes-sociais flex gap-1'>
                <IconRedeSocial icon={<Github className=' w-10 h-full' />} />
                <IconRedeSocial icon={<Instagram className=' w-10 h-full' />} />
                <IconRedeSocial icon={<Linkedin className=' w-10 h-full' />} />
                <IconRedeSocial icon={<Mail className=' w-10 h-full' />} />
            </div>
        </div>
    );
};

const Bg_projetos = () => {
    const { projetos } = useProjetos();

    // Função para embaralhar um array
    const shuffleArray = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Mapeia e filtra para garantir que todas as imagens sejam strings válidas e já aplica o shuffle
    const images: string[] = useMemo(() => {
        return projetos
            .map((projeto) => projeto.imagens.imgCapa)
            .filter((img): img is string => img !== undefined);
    }, [projetos]);

    // Função para gerar uma linha de imagens embaralhadas
    const renderImageRow = (className: string) => {
        const shuffledImages = shuffleArray([...images]); // Gera uma nova ordem aleatória para cada linha
        return (
            <div
                className={`row-image ${className} flex justify-center w-full h-1/3 gap-2`}
            >
                {shuffledImages.map((image, index) => (
                    <img
                        key={`${className}-${index}`}
                        className='block w-full h-full  aspect-[4/3] object-cover opacity-75'
                        src={image}
                        alt={`Imagem ${index + 1}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className='div-imgs h-full absolute  w-1/2 left-1/2 -translate-x-1/5 flex flex-col gap-2  -z-20 -rotate-[35deg] scale-100'>
            {renderImageRow("left")}
            {renderImageRow("right")}
            {renderImageRow("left")}
        </div>
    );
};
