/* eslint-disable jsx-a11y/alt-text */
"use client";

import "./style.css";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";

import { Informacoes, Capa, ImagensProjeto } from "./(components)";

const ProjetoPage = ({ params }: { params: { projeto: string } }) => {
    const { projetos } = useProjetos();
    const projeto = projetos.find(
        (projeto) => projeto.id === Number(params.projeto)
    );
    const router = useRouter();

    return (
        <main>
            {/* <Banner banner={projeto?.imagens.imgBanner} /> */}
            <MaxWidthContainer>
                <section className='content  relative    shadow-sm text-center md:text-start flex flex-col-reverse md:grid md:grid-cols-5  gap-4 mb-8 text-white cursor-pointer'>
                    {/* <div
                        onClick={() => router.back()}
                        className='div-close z-10 reveal absolute bg-white rounded-full right-7 p-2 top-3'
                    >
                        <TfiClose className='icon text-xl text-cinza' />
                    </div> */}

                    <div className='col-span-3 mb-4 grid grid-cols-1 gap-8'>
                        <Capa
                            status={projeto?.status}
                            capa={projeto?.imagens.imgCapa ?? ""}
                        />
                         <ImagensProjeto imagens={projeto?.imagens.imgsProjeto ?? []} />
                    </div>

                    <div className='col-span-2  bg-cinza/50 p-4 md:p-4 rounded-2xl h-min  md:sticky md:top-4'>
                        <Informacoes
                            titulo={projeto?.titulo ?? ""}
                            descricao={projeto?.desc ?? ""}
                            linkVisitar={projeto?.links.linkVisitarProjeto}
                            linkDeploy={projeto?.links.linkDeploy}
                        />
                    </div>
                </section>

               
            </MaxWidthContainer>
        </main>
    );
};

export default ProjetoPage;
