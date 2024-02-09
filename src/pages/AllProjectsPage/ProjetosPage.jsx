import Header from "../../components/Header/Header";
import "./projetosPage.scss";

import {
  SecaoContainer,
  ContentSecao,
} from "../../components/SecaoContainer/SecaoContainer";
import { RedesSociais } from "../../components/RedesSociais/RedesSociais";
import { useProjetos } from "../../contexts/ProjetosContext";
import CardProjeto from "../../components/CardProjeto/CardProjeto";

const ProjetosPage = () => {
  const { projetos } = useProjetos();
  return (
    <>
      <Header />
      <SecaoContainer>
        <ContentSecao>
        <div className="divProjetos">
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.id} id={projeto.id} />
          ))}
        </div>
        </ContentSecao>
      </SecaoContainer>
      <RedesSociais />
    </>
  );
};

export default ProjetosPage;
