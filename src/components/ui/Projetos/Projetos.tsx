"use client";

import { useState, useCallback, memo } from "react";
import { projetos } from "@/data/projetos";
import CardProject from "../CardProject/CardProject";

// Definindo um tipo específico para as tags
type Tag = "Site" | "Design" | "Sistema" | "API" | "IA" | null;

export const Projetos = () => {
    const [filtro, setFiltro] = useState<Tag>(null);

    // Função para filtrar projetos
    const projetosFiltrados = filtro
        ? projetos.filter((projeto) => projeto.tags?.includes(filtro))
        : projetos;

    // Função para alterar o filtro
    const aplicarFiltro = useCallback((tag: Tag) => {
        setFiltro(tag);
    }, []);

    return (
        <div>
            <TagsProjetos filtro={filtro} aplicarFiltro={aplicarFiltro} />
            <div
                id='div-projetos'
                className='grid md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-4'
            >
                {projetosFiltrados.map((projeto) => (
                    <CardProject key={projeto.id} id={projeto.id} />
                ))}
            </div>
        </div>
    );
};

// Componente para exibir e gerenciar as tags
const TagsProjetos = memo(
    ({
        aplicarFiltro,
        filtro,
    }: {
        aplicarFiltro: (tag: Tag) => void;
        filtro: Tag;
    }) => {
        const tags: Tag[] = ["Site", "Design", "Sistema", "API", "IA"]; // Adicione ou remova tags conforme necessário

        const TagButton = ({ tag }: { tag: Tag }) => {
            const isSelected = filtro === tag;
            return (
                <button
                    className={`text-white text-[16px] md:text-[18px] py-2 md:py-4 px-8 lg:px-16   md:px-10  rounded-full  my-transition ${
                        isSelected
                            ? "bg-gradient-principal  "
                            : "   bg-azul-escuro    hover:bg-gradient-principal  "
                    } `}
                    onClick={() => aplicarFiltro(tag)}
                >
                    {tag ? `${tag}s` : "Todos"}
                </button>
            );
        };

        return (
            <div className='flex justify-center mb-8'>
                <div className='inline-flex margin-auto md:border md:border-laranja md:bg-azul-escuro md:rounded-full gap-2 md:gap-0  justify-center flex-wrap '>
                    <TagButton tag={null} />
                    {tags.map((tag) => (
                        <TagButton key={tag} tag={tag} />
                    ))}
                </div>
            </div>
        );
    }
);

// Definindo o displayName para o componente memoizado
TagsProjetos.displayName = "TagsProjetos";
