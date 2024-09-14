'use client'

import { useState, useCallback, memo } from "react";
import { projetos } from "@/data/projetos";
import CardProject from "../CardProject/CardProject";

// Definindo um tipo específico para as tags
type Tag = "Site" | "Design" | "Sistema" | "API" | null;

export const Projetos = () => {
    const [filtro, setFiltro] = useState<Tag>(null);

    // Função para filtrar projetos
    const projetosFiltrados = filtro
        ? projetos.filter(projeto => projeto.tags?.includes(filtro))
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
const TagsProjetos = memo(({ aplicarFiltro, filtro }: { aplicarFiltro: (tag: Tag) => void, filtro: Tag }) => {
    const tags: Tag[] = ["Site", "Design", "Sistema", "API"]; // Adicione ou remova tags conforme necessário

    const TagButton = ({ tag }: { tag: Tag }) => {
        const isSelected = filtro === tag;
        return (
            <button
                className={`px-2 py-1 text-sm ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600`}
                onClick={() => aplicarFiltro(tag)}
            >
                {tag ? `${tag}s` : 'Todos'}
            </button>
        );
    };

    return (
        <div className='flex p-2 border rounded-full justify-center gap-4'>
            <TagButton tag={null} />
            {tags.map((tag) => (
                <TagButton key={tag} tag={tag} />
            ))}
        </div>
    );
});

// Definindo o displayName para o componente memoizado
TagsProjetos.displayName = 'TagsProjetos';
