/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from 'react';

export const Capa: React.FC<{ capa: string,  status?: string }> = ({ capa, status }) => {

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
        <div className={`capa  md:block overflow-hidden relative aspect-[4/3] rounded-2xl col-span-3`}>
               {status == "Em desenvolvimento"? (<p className="text-white z-10 absolute right-2 bottom-2 py-1 px-4 text-[12px] bg-cinza font-bold rounded-full">Projeto em desenvolvimento</p>): null}
            <img
                src={capa}
                className='absolute reveal object-cover h-full w-full z-0'
                alt='Imagem de Capa'
            />
        </div>
    );
};