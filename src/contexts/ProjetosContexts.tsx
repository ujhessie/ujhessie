"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface para um projeto
interface Project {
  id: number;
  titulo: string;
  desc?: string;
  imgCapa?: string;
  imgBanner?: string;
  imgsProjeto?: string[];
  linkVisitarProjeto?: string;
  linkDeploy?:string;
  tecnologias?: string[];
}

// Array de projetos
const projetos: Project[] = [
  {
    id: 1,
    titulo: "GoodDelivery - Sistema de pedidos online",
    desc: "Um cardápio online integrrado com diversos recursos como pedidos diretamente no WhatsApp, painel de gerenciamente de entregas, fácil gerenciamento de produtos e outros recursos bem legais.",
    linkVisitarProjeto:"https://good-delivery.vercel.app/",
    tecnologias:["Wordpress", "Woocommerce", "WhatsApp"],
    imgCapa: "/images/projetos/1/capa.png",
    imgBanner: "/images/projetos/1/banner.png",
    imgsProjeto: [
      "/images/projetos/1/img1.png",
      "/images/projetos/1/img2.png",
      "/images/projetos/1/img3.png",
    ],
  },
];

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
