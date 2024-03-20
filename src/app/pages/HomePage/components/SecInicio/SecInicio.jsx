import "./secInicio.scss";

import { Link } from "react-router-dom";

export const SecInicio = () => {
  return (
    <section id="secInicio">
      <div className="contentSec">
        <div className="text">
          <h1>Olá! Eu sou o Jesse Rodrigues</h1>
          <p className="paragrafo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            sapiente odit ducimus a iusto! Facere quidem eum impedit beatae
            accusamus praesentium molestias explicabo non omnis cupiditate quod,
            quis eos! Impedit.
          </p>
          <div className="botoes">
            <Link className="button-verTrabalhos">Ver meus trabalhos</Link>
            <Link className="button-sobre">Sobre mim</Link>
          </div>
        </div>
        <div className="img">
          <img src="/imgs/me2.png" alt="" />
        </div>
      </div>
    </section>
  );
};
