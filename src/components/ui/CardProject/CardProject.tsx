"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";
import "./style.css";
import { Desc, ImgCapa, Tecnologias, Titulo, VerMais } from "./components/";

const CardProject: React.FC<{ id: number }> = ({ id }) => {
    const { projetos } = useProjetos();
    const projeto = projetos.find((project) => project.id === id);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((module) => {
                const sr = module.default();
                sr.reveal(".reveal", {
                    origin: "bottom",
                    distance: "20px",
                    duration: 500,
                    reset: false,
                    interval: 200,
                });
            });
        }
    }, []);

    if (!projeto) {
        return <div>Projeto não encontrado</div>;
    }

    const handleScrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1000); // Delay de 500ms
    };
    return (
        <Link
            href={`projetos/${projeto.id}`}
            className='reveal card-projeto relative block cursor-pointer z-0 mb-4 w-full text-start rounded-2xl overflow-hidden h-full bg-preto-claro/50 hover:bg-preto-claro/80 '
            onClick={handleScrollToTop}
        >
            <div className='content  my-transition hover:backdrop-blur-3xl hover:shadow-sm rounded-xl p-4 overflow-hidden w-full flex flex-col gap-4'>
                <ImgCapa
                    url={projeto.imagens?.imgCapa}
                    status={projeto.status}
                />
                <Titulo titulo={projeto.titulo} />
                <Tecnologias tecnologias={projeto.tecnologias} />
                {/* <Desc desc={projeto.desc} /> */}
                {/* <VerMais/> */}
            </div>
        </Link>
    );
};

export default CardProject;
