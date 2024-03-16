import "./secInicio.scss";

import RedesSociais from "../../../../components/RedesSociais/RedesSociais";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";

export const SecInicio = () => {
  const Botoes = () => {
    return (
      <div className="botoes">
        <ButtonLink
          nomeExibido="Ver projetos"
          tamanho="grande"
          rota="/projetos"
          tipo={1}
        />
        <ButtonLink
          nomeExibido="Ver mais"
          tamanho="normal"
          tipo={2}
          rota="/projetos"
        />
      </div>
    );
  };

  return (
    <section id="inicio">
      <div className="container">
        <div className="div_info">
          <div className="div_bem_vindo">
            <p className="bem_vindo">Olá! Bem vindo(a)!</p>
          </div>
          <h1>Eu sou o Jesse Rodrigues</h1>
          <p className="profissoes">Dev Web | Designer</p>

          <Botoes />
          <hr className="hr_inicio" />
          <RedesSociais className="div_redes_sociais" />
        </div>
        <div className="div_img">
          <img src="imgs/me.jpg" alt="" />
          <div className="back_card"></div>
        </div>
      </div>
      <a href="#" className="rolar_para_baixo">
        <MdOutlineKeyboardDoubleArrowDown className="icon" />
        Rolar para ver mais
      </a>
    </section>
  );
};
