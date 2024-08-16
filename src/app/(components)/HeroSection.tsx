"use client";

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "@/components/ui/Botao/Botao";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';
import { FaInstagram } from "react-icons/fa";

export const HeroSection = () => {

    const RedesSociais = () => {
        const RedeSocial = ({
            icon = "",
            url,
        }: {
            url: string;
            icon?: React.ReactNode;
        }) => {
            return (
                <a
                    href={url}

                    target='_blank'
                    className=' text-2xl  text-white p-3 bg-zinc-950/50 rounded-full'
                >
                    {icon}
                </a>
            );
        };

        return (
            <div className='flex reveal justify-center gap-2 mb-4'>
                <RedeSocial
                    icon={<FaGithub />}
                    url='https://github.com/ujhessie/'
                />

                <RedeSocial
                    icon={<FaLinkedin />}
                    url='https://www.linkedin.com/in/jesserodrigues4502/'
                />

<RedeSocial
                    icon={<FaInstagram />}
                    url='https://www.instagram.com/ujhessie/'
                />
              
            </div>
        );
    };

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
