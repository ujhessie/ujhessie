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
    titulo: "GoodDelivery | Sistema de pedidos online",
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
  {
    id: 2,
    titulo: "Prime Store | E-commerce de eletrônicos",
    desc: "Projeto simples e minimalista com foco em uma loja de eletrônicos. O projeto foi feito em Wordpress e possui diversos recursos interessantes para o gerenciamento do site.",
    linkVisitarProjeto:"https://primeshop-webinexus.vercel.app/",
    tecnologias:["Wordpress", "Woocommerce", "Elementor"],
    imgCapa: "/images/projetos/2/capa.png",
    // imgBanner: "/images/projetos/2/banner.png",
    imgsProjeto: [
      "/images/projetos/2/img1.png",
      "/images/projetos/2/img2.png",
      
    ],
  },
  {
    id: 3,
    titulo: "GG Ofertas | Loja para produtos afiliados",
    desc: "Loja para vendedores de produtos afiliados. Feito em React e tem a função de ser rápiodo e otimizado. Além de ser editável pelo Google Sheets.",
    linkVisitarProjeto:"https://ujhessie.github.io/ggofertas/",
    linkDeploy:"https://github.com/ujhessie/ggofertas",
    tecnologias:["React js", "Sass", "Google Sheets"],
    imgCapa: "/images/projetos/3/capa.png",
    // imgBanner: "/images/projetos/2/banner.png",
    imgsProjeto: [
      // "/images/projetos/2/img1.png",
      // "/images/projetos/2/img2.png",
      
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
