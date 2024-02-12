import "./detalhesProjetos.scss";

import { useParams } from "react-router-dom";
import { useProjetos } from "../../contexts/ProjetosContext";
import { GoLinkExternal } from "react-icons/go";
import Header from "../../components/Header/Header";
import { IoDocumentTextOutline } from "react-icons/io5";

import { RedesSociais } from "../../components/RedesSociais/RedesSociais";
import {
  ContentSecao,
  SecaoContainer,
} from "../../components/SecaoContainer/SecaoContainer";
import { Slides } from "./components/Slides";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const DetalhesProjetos = () => {
  const { id } = useParams();
  const { projetos } = useProjetos();

  const projeto = projetos.find((projeto) => projeto.id === parseInt(id, 10));

  if (!projeto) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <div className="detalhesProjetos">
      <Header />
      <SecaoContainer className="divContainer inicio">
        <ContentSecao>
          <main>
            <div className="divSlides">
              {/* <Slides imgs={projeto.imgs} /> */}
              <Slides imgs={projeto.imgs} />
            </div>
            <div className="divInfo">
              <h2>{projeto.name}</h2>
              <ul className="recursos">
                {projeto.recursos.map((element, index) => {
                  return <li>{element}</li>;
                })}
              </ul>
              <p className="desc">{projeto.desc}</p>
              <div className="divBotoes">
                <ButtonLink tipo={2} rota={projeto.linkVisitar} icon={<GoLinkExternal />}>
                  Visitar Projeto
                </ButtonLink>
                {(projeto.linkDeploy) && (<ButtonLink rota={projeto.linkDeploy} icon={<IoDocumentTextOutline />} tipo={3}>
                  Ver mais detalhes
                </ButtonLink>)}
                
                {/* <ButtonLink rota={projeto.linkDeploy} icon={<IoDocumentTextOutline />} tipo={3}>
                  Ver mais detalhes
                </ButtonLink> */}
              </div>
            </div>
          </main>
        </ContentSecao>
      </SecaoContainer>
      <RedesSociais />
    </div>
  );
};
