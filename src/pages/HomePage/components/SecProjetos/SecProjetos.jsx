import "./secProjetos.scss";
import { Link } from "react-router-dom";
import CardProjeto from "../../../../components/CardProjeto/CardProjeto";
import { useProjetos } from "../../../../contexts/ProjetosContext";
import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { MdArrowOutward } from "react-icons/md";

export const SecProjetos = () => {
  const { projetos } = useProjetos();
  const ultimosProjetos = projetos.slice().reverse().slice(0, 3);

  return (
    <section id="secProjetos">
      <div className="contentSecProjetos">
        <div className="headerSec">
          <h2>Veja alguns dos meus trabalhos.</h2>
          <p>Aqui há alguns dos meus trabalhos e projetos pessoais.</p>
        </div>
        <div className="content">
          <div className="divProjetos">
            <CardProjeto id={1}/>
            <CardProjeto id={2}/>
            <CardProjeto id={4}/>
            {/* <CardProjeto id={7}/> */}
          </div>
          <div className="divBotoes">
            <ButtonLink rota={"/projetos/"} tipo={2} icon={<MdArrowOutward/>}>
              VER TODOS OS PROJETOS
            </ButtonLink>
            <ButtonLink tipo={3}>Ver serviços</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
