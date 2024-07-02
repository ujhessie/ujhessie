"use client";
import { Botao } from "@/components/ui/Botao/Botao";
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react';


export const Informacoes: React.FC<{
    titulo: string;
    descricao?: string;
    linkVisitar?: string;
    linkDeploy?: string;
}> = ({ titulo, descricao = "", linkVisitar, linkDeploy }) => {

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
        <div className='content reveal  col-span-4'>
            <h2 className=' '>{titulo}</h2>
            <p className='descricao-projeto  text-normal mb-4'>{descricao}</p>
            <div className='flex flex-row-reverse md:justify-end gap-4 flex-wrap justify-center'>
                {linkVisitar ? (
                    <Botao rota={linkVisitar}>Visitar projeto</Botao>
                ) : null}

                {linkDeploy ? (
                    <Botao rota={linkDeploy} tipo='transparente'>
                        Ver deploy
                    </Botao>
                ) : null}
            </div>
            {/* Aqui você pode adicionar os botões ou links conforme necessário */}
        </div>
    );
};
