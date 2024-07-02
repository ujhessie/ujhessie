/* eslint-disable @next/next/no-img-element */
"use client";
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react';

export const Capa: React.FC<{ capa: string }> = ({ capa }) => {

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 2000,
            reset: true,
            interval: 200,
        });
    }, []);

    return (
        <div className={`capa  md:block overflow-hidden relative aspect-[4/3] rounded-2xl col-span-3`}>
            <img
                src={capa}
                className='absolute reveal object-cover h-full w-full'
                alt='Imagem de Capa'
            />
        </div>
    );
};