import "./detalhesProjetos.scss";

import { useParams } from "react-router-dom";
import { useProjetos } from "../../contexts/ProjetosContext";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { RedesSociais } from "../../components/RedesSociais/RedesSociais";
import { SecaoContainer } from "../../components/SecaoContainer/SecaoContainer";

export const DetalhesProjetos = () => {
  const { id } = useParams();
  const { projetos } = useProjetos();

  const projeto = projetos.find((projeto) => projeto.id === parseInt(id, 10));

  if (!projeto) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <>
      <Header />
      <SecaoContainer>
        <div id="divDetalhesProjetos">
          <main>
            {projeto.imgBanner && (
              <div>
                {/* Sua estrutura aqui */}
                <div className="divBanner">
                  <img src={projeto.imgBanner} alt="Banner do Projeto" />
                </div>
              </div>
            )}

            <div className="divInfos">
              <img
                src="/imgs/Banner teste.png"
                alt=""
                className="imgBackground"
              />
              <div className="divBlur"></div>
              <div className="contentInfo">
                <h2>Sobre o projeto:</h2>
                <p className="desc">{projeto.desc}</p>
                <hr />
                <h3>Tecnologias, habilidades e ferramentas</h3>
                <ul className="tecnologias">
                  <li>React js</li>
                  <li>React js</li>
                  <li>React js</li>
                  <li>React js</li>
                </ul>
                <hr />
                <h3>Visite este projeto</h3>
                <div className="div_botoes">
                  <a href={projeto.linkVisitar} className="a_button1">
                    Visitar projeto
                  </a>
                  <a href={projeto.linkDeploy} className="a_button2">
                    Ver um pouco mais
                  </a>
                </div>
              </div>
            </div>

            <div className="divImagens">
              {projeto.imgs &&
                projeto.imgs.map((img, index) => (
                  <div key={index} className="divImagem">
                    <img src={img} alt={`Imagem do Projeto ${index + 1}`} />
                  </div>
                ))}
            </div>
          </main>
        </div>
      </SecaoContainer>
      <RedesSociais />
    </>
  );
};
