"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import projetos from "../data/projetos.json";

// Interface para um projeto
interface Project {
    id: number;
    titulo: string;
    desc?: string;
    imagens: {
        imgCapa?: string;
        imgBanner?: string;
        imgsProjeto?: string[];
    };
    links: {
        linkVisitarProjeto?: string;
        linkDeploy?: string;
    };

    tecnologias?: string[];
}

// Interface para o contexto de projetos
interface ProjetosContextProps {
    projetos: Project[];
}

// Criando o contexto com valor inicial
const ProjetosContext = createContext<ProjetosContextProps>({
    projetos: [],
});

// Provedor do contexto de projetos
export const ProjetosProvider = ({ children }: { children: ReactNode }) => {
    const [projects] = useState<Project[]>(projetos);

    return (
        <ProjetosContext.Provider value={{ projetos: projects }}>
            {children}
        </ProjetosContext.Provider>
    );
};

// Hook personalizado para usar o contexto de projetos
export const useProjetos = () => useContext(ProjetosContext);
