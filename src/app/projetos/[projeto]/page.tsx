/* eslint-disable @next/next/no-img-element */
"use client";
import { IoClose } from "react-icons/io5";
import "./style.css";
import Header from "@/components/ui/Header";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import Tags from "@/components/ui/Tags/Tags";
import { useProjetos } from "@/contexts/ProjetosContexts";
import Link from "next/link";

const ProjetoPage = ({ params }: { params: { projeto: string } }) => {
  const { projetos } = useProjetos();

  // Verifique se os projetos foram carregados
  if (!projetos) {
    return (
      <main>
        <section>
          <MaxWidthContainer>
            <Header />
            <div className='content'>
              <h1>Carregando...</h1>
            </div>
          </MaxWidthContainer>
        </section>
      </main>
    );
  }

  // Procure o projeto com base no ID fornecido
  const projeto = projetos.find(
    (projeto) => projeto.id === Number(params.projeto)
  );

  // Se o projeto não for encontrado, exiba "Projeto não encontrado"
  if (!projeto) {
    return (
      <main>
        <section>
          <MaxWidthContainer>
            <Header />
            <div className='content'>
              <h1>Projeto não encontrado</h1>
            </div>
          </MaxWidthContainer>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className='banner relative overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[4/1] '>
          <img
            src={projeto.imgBanner}
            alt=''
            className='absolute -z-10 w-full  h-full object-cover'
          />
          <Header fullWidth={false} />
        </div>
        <MaxWidthContainer>
          <Link
            href='/'
            className='absolute p-4 aspect-[1/1] text-3xl rounded-full bg-white text-black flex justify-center itens-center -right-0.5 -top-4'
          >
            <IoClose />
          </Link>
          <div className='content -mt-14'>
            <section className='bg-zinc-950 p-8 md:p-12  rounded-2xl shadow-sm text-center md:text-start grid md:grid-cols-2 gap-8'>
              <div className='content'>
                <h2 className='titulo-projeto'>{projeto.titulo}</h2>

                <p className='descricao-projeto text-normal mb-4'>
                  {projeto.desc}
                </p>
                <div className='botoes flex flex-col md:flex-row mb-4  gap-4'>
                  {projeto.linkVisitarProjeto ? (
                    <a
                      href={projeto.linkVisitarProjeto}
                      target='_blank'
                      className='px-8 py-2 bg-white inline-block rounded-full text-black border font-bold'
                    >
                      Visitar projeto
                    </a>
                  ) : null}
                  {projeto.linkDeploy ? (
                    <a
                      href={projeto.linkDeploy}
                      target='_blank'
                      className='px-8 py-2  inline-block rounded-full  border font-bold'
                    >
                      Ver deploy
                    </a>
                  ) : null}
                </div>
                <div className='tecnologias flex gap-2 flex-wrap mb-4 justify-center md:justify-start'>
                  {projeto.tecnologias?.map((tec, index) => (
                    <Tags key={index} text={tec} />
                  ))}
                </div>
              </div>
              <div className='capa hidden md:block overflow-hidden relative aspect-[4/3] rounded-2xl'>
                <img
                  src={projeto.imgCapa}
                  className='absolute object-cover h-full w-full'
                  alt=''
                />
              </div>
            </section>
            <section className='mt-4 flex flex-col gap-4'>
              {projeto.imgsProjeto?.map((img, index) => (
                <img
                  key={index}
                  className='w-full rounded-2xl'
                  src={img}
                  alt={`Imagem do projeto ${index + 1}`}
                />
              ))}
            </section>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
};

export default ProjetoPage;
