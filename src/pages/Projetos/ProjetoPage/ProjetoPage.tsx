import { useParams } from "react-router-dom";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import { useProjetos } from "../../../contexts/ProjetosContexts";
import { Capa, ImagensProjeto, Informacoes } from "./components";
import "./style.css";
import Header from "../../../components/Header/Header";

const ProjetoPage = () => {
  const { projeto } = useParams<{ projeto: string }>(); // Obtém o parâmetro da URL
  const { projetos } = useProjetos();

  // Converte o parâmetro para número e verifica validade
  const projetoId = Number(projeto);
  if (isNaN(projetoId)) {
    return <div>Parâmetro inválido.</div>;
  }

  // Encontra o projeto correspondente
  const projetoAtual = projetos.find((p) => p.id === projetoId);

  if (!projetoAtual) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Header />

      <MaxWidthContainer>
        <section className="content relative shadow-sm text-center md:text-start flex flex-col-reverse md:grid md:grid-cols-5 gap-4 mb-8 text-white cursor-pointer">
          <div className="col-span-3 mb-4 grid grid-cols-1 gap-8">
            <Capa
              status={projetoAtual.status}
              capa={projetoAtual.imagens.imgCapa ?? ""}
            />
            <ImagensProjeto imagens={projetoAtual.imagens.imgsProjeto ?? []} />
          </div>

          <div className="col-span-2 bg-cinza/50 p-4 md:p-4 rounded-2xl h-min md:sticky md:top-4">
            <Informacoes
              titulo={projetoAtual.titulo ?? ""}
              descricao={projetoAtual.desc ?? ""}
              linkVisitar={projetoAtual.links.linkVisitarProjeto}
              linkDeploy={projetoAtual.links.linkDeploy}
            />
          </div>
        </section>
      </MaxWidthContainer>
    </>
  );
};

export default ProjetoPage;
