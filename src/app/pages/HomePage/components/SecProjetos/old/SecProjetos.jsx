import "./secProjetos.scss";
import { Link } from "react-router-dom";
import CardProjeto from "../../../../components/CardProjeto/CardProjeto";
import { useProjetos } from "../../../../contexts/ProjetosContext";
import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";

export const SecProjetos = () => {
  const { projetos } = useProjetos();
  const ultimosProjetos = projetos.slice().reverse().slice(0, 3);

  const HeaderSection = () => {
    return (
      <div className="header_section">
        <h2>
          Alguns dos meus <span>projetos</span> em destaque
        </h2>
        {/* <div className="tags">
          <a href="" className="tag ">
            Tem tag
          </a>
          <a href="" className="tag">
            Tem tag
          </a>
          <a href="" className="tag">
            Tem tag
          </a>
          <a href="" className="tag">
            Tem tag
          </a>
          <a href="" className="tag">
            Tem tag
          </a>
          <a href="" className="tag">
            Tem tag
          </a>
        </div> */}
      </div>
    );
  };

  return (
    <section id="projetos">
      <div className="container">
        <HeaderSection />

        <div className="cardsProjetos">
          {ultimosProjetos.map((projeto) => (
            <CardProjeto key={projeto.id} id={projeto.id} />
          ))}
        </div>
        <div className="div_botoes">
          <ButtonLink
            nomeExibido={"Ver todos os projetos"}
            rota={"/projetos"}
            rolarParaTopo={true}
            tipo={1}
            tamanho="grande"
          />
          <ButtonLink tipo={2}
            nomeExibido="Precisa um serviço?"
            tamanho="grande"
          />
        </div>
      </div>
    </section>
  );
};

