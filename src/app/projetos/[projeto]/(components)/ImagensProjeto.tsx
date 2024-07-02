/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from 'react';

export const ImagensProjeto: React.FC<{ imagens: string[] }> = ({
    imagens,
}) => {

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
        <>
            {imagens.map((img, index) => (
                <img
                    key={index}
                    className='w-full reveal rounded-xl block mb-4'
                    src={img}
                    alt={`Imagem do projeto ${index + 1}`}
                />
            ))}
</>
    );
};
