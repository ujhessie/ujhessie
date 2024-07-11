/* eslint-disable jsx-a11y/alt-text */
"use client";

import "./style.css";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";

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
                <section className='content  bg-zinc-950 px-4 py-8 md:p-12 rounded-2xl shadow-sm text-center md:text-start flex flex-col md:grid md:grid-cols-7  gap-8 mb-8 text-white'>
                    <Capa capa={projeto?.imagens.imgCapa ?? ""} />
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
