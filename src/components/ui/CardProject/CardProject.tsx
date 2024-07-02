/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";
import "./style.css";
import { ImgCapa, Tecnologias, Titulo } from "./components/";

import { useEffect } from 'react';

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
                    duration: 1000,
                    reset: true,
                    interval: 200,
                });
            });
        }
    }, []);

    return (
        <Link
            href={`projetos/${projeto?.id}`}
            className='reveal card-projeto relative block cursor-pointer break-inside  w-full aspect-[4/3]  bg-gray-600 rounded-xl overflow-hidden'
        >
            <ImgCapa url={projeto?.imagens?.imgCapa} />
            <div className='div-info-product my-transition absolute w-full h-full left-0 top-0 rounded-md flex flex-col justify-end'>
                <div className='content p-4'>
                    <Titulo titulo={projeto?.titulo} />
                    <Tecnologias tecnologias={projeto?.tecnologias} />
                </div>
            </div>
        </Link>
    );
};
export default CardProject;
