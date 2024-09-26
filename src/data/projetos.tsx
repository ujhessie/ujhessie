export interface projeto {
    id: number;
    titulo: string;
    desc?: string;
    imagens: {
        imgCapa?: string;
        imgBanner?: string;
        imgSite?: string;
        imgsProjeto?: string[];
    };
    links: {
        linkVisitarProjeto?: string;
        linkDeploy?: string;
    };
    tecnologias?: string[];
    status?: "A desenvolver" | "Em desenvolvimento" | "Concluído";
    tags?: ("Site" | "Design" | "Sistema" | "API")[];
}

export const projetos: projeto[] = [
    {
        id: 1,
        titulo: "GoodDelivery | Sistema de pedidos online",
        desc: "Um cardápio online integrado com diversos recursos como pedidos diretamente no WhatsApp, painel de gerenciamento de entregas, fácil gerenciamento de produtos e outros recursos bem legais.",
        links: {
            linkVisitarProjeto: "https://good-delivery.vercel.app/",
        },
        tecnologias: ["Wordpress", "Woocommerce", "WhatsApp"],
        imagens: {
            imgCapa: "/images/projetos/1/capa.png",
            imgBanner: "/images/projetos/1/banner.png",
            imgsProjeto: [
                "/images/projetos/1/img1.png",
                "/images/projetos/1/img2.png",
                "/images/projetos/1/img3.png",
            ],
        },
        status: "Concluído",
        tags: ["Site"],
    },
    {
        id: 2,
        titulo: "Prime Store | E-commerce de eletrônicos",
        desc: "Projeto simples e minimalista com foco em uma loja de eletrônicos. O projeto foi feito em Wordpress e possui diversos recursos interessantes para o gerenciamento do site.",
        links: {
            linkVisitarProjeto: "https://primeshop-webinexus.vercel.app/",
        },
        tecnologias: ["Wordpress", "Woocommerce", "Elementor"],
        imagens: {
            imgCapa: "/images/projetos/2/capa.png",
            imgsProjeto: [
                "/images/projetos/2/img1.png",
                "/images/projetos/2/img2.png",
            ],
        },
        tags: ["Site"],
    },
    {
        id: 3,
        titulo: "GG Ofertas | Loja para produtos afiliados",
        desc: "Loja para vendedores de produtos afiliados. Feito em React e tem a função de ser rápido e otimizado. Além de ser editável pelo Google Sheets.",
        links: {
            linkVisitarProjeto: "https://ujhessie.github.io/ggofertas/",
            linkDeploy: "https://github.com/ujhessie/ggofertas",
        },
        tecnologias: ["React js", "Sass", "Google Sheets"],
        imagens: {
            imgCapa: "/images/projetos/3/capa.png",
        },
        tags: ["Site", "Sistema"],
    },
    {
        id: 4,
        titulo: "DevShop | Loja virtual",
        desc: "Loja virtual feita em WordPress: simples, elegante, otimizada e adaptável a diversas telas. Perfeita para qualquer nicho.",
        links: {
            linkVisitarProjeto: "https://dev-devshop-ujhessie.pantheonsite.io/",
        },
        tecnologias: ["Wordpress", "Woocommerce", "Elementor"],
        imagens: {
            imgCapa: "/images/projetos/4/capa.png",
            imgsProjeto: [
                "/images/projetos/4/1.png",
                "/images/projetos/4/2.png",
            ],
        },
        tags: ["Site"],
    },
    {
        id: 5,
        titulo: "Lablingue | Site curso de inglês",
        desc: "Landing page para venda de curso de inglês. Simples, moderno, otimizado e escalável para outros projetos.",
        links: {},
        tecnologias: ["Wordpress", "Woocommerce", "Elementor"],
        imagens: {
            imgCapa: "/images/projetos/5/capa.png",
            imgsProjeto: ["/images/projetos/5/1.png"],
        },
        tags: ["Site"],
    },
    {
        id: 6,
        titulo: "GIDELIVERY | Sistema de pedidos",
        desc: "Sistema de pedido para pequenas lanchonetes. O sistema é integrado com a função de pedidos via WhatsApp, além de ser escalável para um projeto Saas.",
        links: {
            linkDeploy: "https://github.com/ujhessie/GiDelivery",
            linkVisitarProjeto: "https://ujhessie.github.io/GiDelivery/",
        },
        tecnologias: ["Next js", "MongoDB", "Figma"],
        imagens: {
            imgCapa: "/images/projetos/6/capa.png",
        },
        status: "Em desenvolvimento",
        tags: ["Sistema", "Site"],
    },
    {
        id: 7,
        titulo: "API para upload de arquivos",

        links: {},
        tecnologias: ["Node js", "Multer", "Typescript", "Express"],
        imagens: {
            imgCapa:
                "https://e0.pxfuel.com/wallpapers/86/808/desktop-wallpaper-js-node-js.jpg",
        },
        status: "Em desenvolvimento",
        tags: ["API", "Sistema"],
    },
    {
        id: 8,
        titulo: "API | Upload de imagens para o Google Drive",
        desc: "A API de Upload de Imagens é uma aplicação desenvolvida utilizando Express.js e Google Drive, projetada para facilitar o upload, armazenamento e visualização de imagens. O objetivo principal é permitir que usuários façam upload de imagens através de uma interface web, salvem essas imagens no Google Drive e acessem as URLs das imagens diretamente da aplicação. A API gerencia o upload dos arquivos, define permissões de compartilhamento apropriadas e retorna URLs acessíveis para visualização das imagens.",
        links: {
            linkVisitarProjeto: "https://github.com/ujhessie/upload-de-imagens",
        },
        tecnologias: [
            "Node js",
            "Multer",
            "Google API",
            "Typescript",
            "Express",
        ],
        imagens: {
            imgCapa: "https://wallpapercave.com/wp/wp5070716.jpg",
        },
        tags: ["API"],
    },
    {
        id: 9,
        titulo: "Planejador de viagem | NLW Rocketseat 2024",
        desc: "O projeto é um site desktop desenvolvido para facilitar a criação de planos de viagem em grupo, permitindo que os usuários registrem atividades e compartilhem links úteis. Este projeto faz parte do evento NLW Journey, oferecido pela Rocketseat, e visa promover a colaboração e a organização entre amigos durante o planejamento de viagens.",
        links: {},
        tecnologias: ["Vite", "React js", "Tailwind", "Typescript"],
        imagens: {
            imgCapa: "/images/projetos/9/capa.png",
        },
        status: "Em desenvolvimento",
        tags: ["Site", "Sistema"],
    },
    {
        id: 10,
        titulo: "JR Advocacia | Site de advogados",
        desc: "Um site elegante, minimalista, otimizado e responsivo. Feito em Wordpress, este site é facilmente escalável, podendo adicionar diversas funcionalidades.",
        links: {
            linkVisitarProjeto: "https://jr-advocacia.vercel.app/",
        },
        tecnologias: ["Wordpress", "Elementor", "PHLOX", "CSS"],
        imagens: {
            imgCapa: "/images/projetos/10/capa.png",
            imgsProjeto: ["/images/projetos/10/2.webp"],
        },
        status: "Concluído",
        tags: ["Site", "Design"],
    },
    {
        id: 11,
        titulo: "Estação da Moda",
        desc: "Loja virtual em Wordpress para loja de roupas femininas. Minimalista, elegante, otimizada, responsiva e de fácil gestão.",
        links: {
            linkVisitarProjeto: "https://dev-estaca-da-moda.pantheonsite.io/",
        },
        tecnologias: ["Wordpress", "Elementor", "PHLOX", "CSS"],
        imagens: {
            imgCapa: "/images/projetos/11/capa.png",
            imgsProjeto: ["/images/projetos/11/2.png"],
        },
        status: "Concluído",
        tags: ["Site"],
    },
    {
        id: 12,
        titulo: "API BreackingNews",
        desc: "Back End do sistema de blog utilizando React, MongoDB, Express e outros",
        links: {},
        tecnologias: ["Wordpress", "Elementor", "PHLOX", "CSS"],
        imagens: {
            imgCapa:
                "https://th.bing.com/th/id/R.fe7d526dd46ca6ca108427ed7ed90285?rik=27Tz4oItHQL6pA&pid=ImgRaw&r=0",
        },
        status: "Em desenvolvimento",
        tags: ["API"],
    },
    {
        id: 13,
        titulo: "Social Media | Churrasco do Geilson",
        desc: "Criação de material para redes sociais, incluindo postagens e banners para o evento 'Churrasco do Geilson'.",
        links: {},
        tecnologias: ["Photoshop", "Illustrator"],
        imagens: {
            imgCapa: "/images/projetos/13/capa.png",
            imgsProjeto: [
                "/images/projetos/13/1.png",
                "/images/projetos/13/6.png",
                "/images/projetos/13/2.png",
                "/images/projetos/13/3.png",
                "/images/projetos/13/4.png",
                "/images/projetos/13/5.png",
            ],
        },
        tags: ["Design"],
    },
    {
        id: 14,
        titulo: "Social Media | Lava Jato",
        desc: "Material para redes sociais para a promoção de serviços do Lava Jato, incluindo postagens e banners.",
        links: {},
        tecnologias: ["Photoshop", "Illustrator"],
        imagens: {
            imgCapa: "/images/projetos/14/capa.png",
            imgsProjeto: [
                "/images/projetos/14/1.png",
                "/images/projetos/14/2.png",
                "/images/projetos/14/3.png",
                "/images/projetos/14/4.png",
                "/images/projetos/14/5.png",
                "/images/projetos/14/6.png",
            ],
        },
        status: "Concluído",
        tags: ["Design"],
    },
    {
        id: 15,
        titulo: "Identidade Visual | Tia Bia",
        desc: "Criação da identidade visual para o negócio 'Tia Bia', incluindo logotipo e material de marca.",
        links: {},
        tecnologias: ["Photoshop", "Illustrator"],
        imagens: {
            imgCapa: "/images/projetos/15/capa.png",
            imgsProjeto: [
                "/images/projetos/15/1.png",
                "/images/projetos/15/2.png",
                "/images/projetos/15/3.png",
            ],
        },
        status: "Concluído",
        tags: ["Design"],
    },
    {
        id: 16,
        titulo: "Identidade Visual | Pivete Mimado",
        desc: "Desenvolvimento da identidade visual para o 'Pivete Mimado', incluindo logotipo, paleta de cores e materiais gráficos.",
        links: {},
        tecnologias: ["Photoshop", "Illustrator"],
        imagens: {
            imgCapa: "/images/projetos/16/capa.png",
            imgsProjeto: [
                "/images/projetos/16/1.png",
                "/images/projetos/16/2.png",
                "/images/projetos/16/3.png",
                "/images/projetos/16/4.png",
                "/images/projetos/16/5.png",
            ],
        },
        status: "Concluído",
        tags: ["Design"],
    },
    {
        id: 17,
        titulo: "Identidade Visual | Good Delivery",
        desc: "Criação da identidade visual para o 'Good Delivery', incluindo logotipo e material promocional.",
        links: {},
        tecnologias: ["Photoshop", "Illustrator"],
        imagens: {
            imgCapa: "/images/projetos/17/capa.png",
            imgsProjeto: [
                "/images/projetos/17/1.png",
                "/images/projetos/17/2.png",
                "/images/projetos/17/3.png",
                "/images/projetos/17/4.png",
                "/images/projetos/17/5.png",
            ],
        },
        status: "Concluído",
        tags: ["Design"],
    },
    {
        id:18,
        titulo: "Sistema de imobiliária em Wordpress",
        desc:"Sistema de imobiliária com duncionalidades esssenciais como: Cadastro e edição de imóvel, Páginas dos imóveis com informaçõs dinâmicas e outros. O sistema foi feito utilizando, principalmente, os plugins Jet Engine e Jet Smart Filters, podendo ser escalado para um projeto ainda maior.",
        status:"Concluído",
        tecnologias: ["Wordoprss", "Elementor pro", "Jet Engine", "Jet Smart Filters"], 
        tags: ["Site", "Sistema", 'API'],
        links: {
            linkVisitarProjeto: "https://imobiliariarealizeimoveis.com.br/",
        },
        imagens: {
            imgCapa: "/images/projetos/18/capa.png",
            imgsProjeto: ["/images/projetos/18/1.png", "/images/projetos/18/2.png", "/images/projetos/18/3.png", "/images/projetos/18/4.png"],
        },
    }
];
