/* eslint-disable jsx-a11y/alt-text */
"use client";


import "./style.css";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { TfiClose } from "react-icons/tfi";

import { Banner, Informacoes, Capa, ImagensProjeto } from "./(components)";

const ProjetoPage = ({ params }: { params: { projeto: string } }) => {
    const { projetos } = useProjetos();
    const projeto = projetos.find(
        (projeto) => projeto.id === Number(params.projeto)
    );

    return (
        <main>
            {/* <Banner banner={projeto?.imagens.imgBanner} /> */}
            <MaxWidthContainer>
                <section className='content    bg-zinc-950 px-4 py-8 md:p-12 rounded-2xl shadow-sm text-center md:text-start flex flex-col md:grid md:grid-cols-7  gap-8 mb-8 text-white'>
                <div className='div-close z-10  absolute bg-white rounded-full right-7 p-3 top-4' >
                        <TfiClose className='icon text-2xl text-cinza' />
                    </div>
                    <Capa status={projeto?.status} capa={projeto?.imagens.imgCapa ?? ""} />
                    <Informacoes
                        titulo={projeto?.titulo ?? ""}
                        descricao={projeto?.desc ?? ""}
                        linkVisitar={projeto?.links.linkVisitarProjeto}
                        linkDeploy={projeto?.links.linkDeploy}
                    />
                </section>

                <ImagensProjeto imagens={projeto?.imagens.imgsProjeto ?? []} />
            </MaxWidthContainer>
        </main>
    );
};

export default ProjetoPage;
