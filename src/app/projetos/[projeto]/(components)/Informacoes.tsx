"use client";
import { Botao } from "@/components/ui/Botao/Botao";

import { useEffect } from "react";

export const Informacoes: React.FC<{
    titulo: string;
    descricao?: string;
    linkVisitar?: string;
    linkDeploy?: string;
}> = ({ titulo, descricao = "", linkVisitar, linkDeploy }) => {

    
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
        <div className='content reveal col-span-4 md:pr-10'>
            <h2 className='reveal'>{titulo}</h2>
            <p className='descricao-projeto text-normal mb-4 reveal'>
                {descricao}
            </p>
            <div className='flex flex-row-reverse md:justify-end gap-4 flex-wrap justify-center reveal'>
                {linkVisitar ? (
                    <Botao rota={linkVisitar}>Visitar projeto</Botao>
                ) : null}
                {linkDeploy ? (
                    <Botao rota={linkDeploy} tipo='transparente'>
                        Ver deploy
                    </Botao>
                ) : null}
            </div>
        </div>
    );
};
