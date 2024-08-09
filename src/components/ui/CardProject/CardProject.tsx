/* eslint-disable @next/next/no-img-element */
"use client";
import  { useEffect } from "react";

import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";
import "./style.css";
import { Desc, ImgCapa, Tecnologias, Titulo, VerMais } from "./components/";

// Importação do scrrol reveal
import ScrollReveal from "scrollreveal";


const CardProject: React.FC<{ id: number }> = ({ id }) => {
    const { projetos } = useProjetos();
    const projeto = projetos.find((project) => project.id === id);

    // Configuração do scrrol reveal
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            reset: true,
        });
    }, []);

     const handleScrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1); // 1 milissegundo de atraso
    };

    return (
        <Link
            href={`projetos/${projeto?.id}`}
            className='reveal card-projeto relative block cursor-pointer z-0 mb-4  w-full     rounded-2xl overflow-hidden'
            onClick={handleScrollToTop}
        >
            <div className=' content bg-cinza/20 hover:bg-cinza/50 my-transition hover:backdrop-blur-3xl hover:shadow-sm rounded-xl  p-4 overflow-hidden w-full flex flex-col gap-4'>
                <ImgCapa url={projeto?.imagens?.imgCapa} status={projeto?.status} />
                <Titulo titulo={projeto?.titulo} />
                
                <Tecnologias tecnologias={projeto?.tecnologias} />
                <Desc desc={projeto?.desc} />
                <VerMais/>
            </div>
        </Link>
    );
};
export default CardProject;
