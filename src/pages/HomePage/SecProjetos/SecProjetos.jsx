import "./secProjetos.scss";

import CarrosselProjetos from "./CarrosselProjetos/CarrosselProjetos";

import { Link } from "react-router-dom";

const SecProjetos = () => {
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

        <CarrosselProjetos />
        <div className="div_botoes">
          <Link to="/projetos" className="a_button1">
            Ver mais projetos
          </Link>
          <a href="" className="a_button2">
            Precisa de um serviço?
          </a>
        </div>
      </div>
    </section>
  );
};
export default SecProjetos;
