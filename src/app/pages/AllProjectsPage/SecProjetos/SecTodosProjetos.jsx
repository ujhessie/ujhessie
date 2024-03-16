import "./secTodosProjetos.scss";


import { useProjetos } from "../../../contexts/ProjetosContext";
import CardProjeto from "../../../components/CardProjeto/CardProjeto";

const SecTodosProjetos = () => {
  const { projetos } = useProjetos();
  return (
    <section id="sec_todos_projetos">
      <div className="container">
        <div className="header_sec">
          <h2>
            Alguns dos meus <span>projetos</span>.
          </h2>
     
        </div>
        <div className="div_projetos">
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.id} id={projeto.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecTodosProjetos;
