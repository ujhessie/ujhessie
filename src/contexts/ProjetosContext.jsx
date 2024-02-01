import { createContext, useState, useContext } from "react";

const projetosIniciais  = [
    {
      id: 1,
      name: "Meu portfólio",
      desc: "Um portfólio minimalista feito com React Js",
      data: "05/23",
      recursos: ["React JS", "Vite", "Sass"],
      categoria: "catSites catFrontEnd",
      linkVisitar: "https://ujhessie.github.io/ujhessie/",
      linkDeploy: "https://github.com/ujhessie/ujhessie",
      imgBanner:"/imgs/Banner teste.png",
      imgs: [
        "./imgs/projetos/portfolio/1.png",
        "./imgs/projetos/portfolio/2.png",
        "./imgs/projetos/portfolio/3.png",
      ],
    },
  {
    id: 2,
    name: "Sistema lanchonete | Em desenvolvimento",
    desc: "Este projeto utiliza uma planilha do Google como banco de dados para uma página estática, empregando o método GET para buscar informações sobre produtos e detalhes da lanchonete. Desenvolvido em ReactJS e TypeScript, o foco está na criação de interfaces intuitivas e responsivas. A combinação estratégica de Sass, Figma e Bootstrap garante um design visualmente atrativo. Hospedado no GitHub Pages, o site oferece mensagens dinâmicas, como avisos de horários de funcionamento, proporcionando uma interação personalizada com os clientes. Esta iniciativa destaca-se por sua abordagem moderna e integrada, oferecendo uma experiência atraente aos usuários da lanchonete.",
    data: "06/23",
    recursos: ["React", "Sass", "Photoshop", "Figma"],
    categoria: "catSites catFrontEnd",
    linkVisitar: "https://ujhessie.github.io/miniLanchonete/",
    linkDeploy: "https://github.com/ujhessie/miniLanchonete",
    imgs: [
      "./imgs/projetos/miniLanchonete/1.png",
      "./imgs/projetos/miniLanchonete/2.png",
    ],
  },
  {
    id: 3,
    name: "LinkedIn - Réplica",
    desc: "Uma réplica do LinkedIn usando um protótipo do figma como modelo...",
    data: "06/23",
    recursos: ["Figma", "HTML", "CSS"],
    categoria: "catSites catFrontEnd",
    linkVisitar: "https://ujhessie.github.io/linkedin-replica/",
    linkDeploy: "https://github.com/ujhessie/linkedin-replica",
    imgs: [
      "./imgs/projetos/linkedInReplica/1.png",
      "./imgs/projetos/linkedInReplica/2.png",
    ],
  },
  {
    id: 4,
    name: "Pivete Mimado - Loja Virtual",
    desc: "Breve identidade visual de uma loja de roupas.",
    data: "10/23",
    recursos: ["Photoshop", "Illustrator"],
    categoria: "catSocialMedia ",
    linkVisitar: "https://www.behance.net/gallery/181475227/Pivete-Mimado-Logo",
    linkDeploy: "#",
    imgs: [
      "./imgs/projetos/pivete/2.png",
      "./imgs/projetos/pivete/capa.png",
      "./imgs/projetos/pivete/3.png",
    ],
  },
  {
    id: 5,
    name: "Sistema de Delivery - Wordpress",
    desc: "A ideia era criar um sistema de delivery. Com um painel simples onde qualquer pessoa tenha a capacidade de operar. ",
    data: "10/23",
    recursos: ["Wordpress", "Photoshp", "Illustrator"],
    categoria: "catSites catFrontEnd ",
    linkVisitar: "https://www.behance.net/gallery/181475227/Pivete-Mimado-Logo",
    linkDeploy: "#",
    imgs: [
      "./imgs/projetos/sistemaDelivery/capa.png",
      "./imgs/projetos/sistemaDelivery/1.png",
      "./imgs/projetos/sistemaDelivery/2.png",
      "./imgs/projetos/sistemaDelivery/3.png",
      "./imgs/projetos/sistemaDelivery/4.png",
    ],
  },
  {
    id: 6,
    name: "Gi elivery | Em desenvolvimento",
    desc: "Desenvolvi um sistema inovador para lanchonetes que integra pedidos via WhatsApp e um site consumindo uma API do Google Planilhas para exibir dinamicamente a lista de produtos. Esta solução simplifica o processo de pedidos e oferece atualizações em tempo real do cardápio, melhorando a experiência tanto para clientes quanto para a equipe.",
    data: "11/23",
    recursos: ["React Js", "Google Planilhas", "Photoshop", "WhatsApp"],
    categoria: "catSites catFrontEnd ",
    linkVisitar: "https://ujhessie.github.io/GiDelivery/",
    linkDeploy: "https://github.com/ujhessie/GiDelivery",
    imgs: ["./imgs/projetos/giDelivery/1.png"],
  },
  {
    id: 7,
    name: "GG Ofertas",
    desc: "Um sistema que utiliza uma integração com o Google Planilhas para carregar dinamicamente uma lista de produtos de afiliados, como AliExpress, Shopee, Amazon e outros. Esta plataforma permite aos usuários visualizarem uma variedade de produtos, onde os links de compra direcionam para os respectivos sites de venda. A utilização dessa abordagem oferece uma experiência simplificada aos usuários, fornecendo uma ampla gama de opções de compra em diferentes plataformas, enquanto facilita a atualização e manutenção dos produtos por meio das planilhas do Google.",
    data: "11/23",
    recursos: ["React Js", "Google Planilhas", "Photoshop", "WhatsApp"],
    categoria: "catSites catFrontEnd ",
    linkVisitar: "https://ujhessie.github.io/ggofertas/",
    linkDeploy: "https://github.com/ujhessie/ggofertas",
    imgs: [
      "./imgs/projetos/sistemaDelivery/capa.png",
      "./imgs/projetos/sistemaDelivery/1.png",
      "./imgs/projetos/sistemaDelivery/2.png",
      "./imgs/projetos/sistemaDelivery/3.png",
      "./imgs/projetos/sistemaDelivery/4.png",
    ],
  },
];

export const ProjetosContext = createContext();

export const ProjetosProvider = ({ children }) => {
  const [projetos, setProjetos] = useState(projetosIniciais);

  return (
    <ProjetosContext.Provider value={{ projetos, setProjetos }}>
      {children}
    </ProjetosContext.Provider>
  );
};

export const useProjetos = () => {
  const context = useContext(ProjetosContext);
  if (!context) {
    throw new Error("useProjetos deve ser usado dentro de um ProjetosProvider");
  }
  return context;
};