import "./secInicio.scss";

// import RedesSociais from "../../../../components/RedesSociais/RedesSociais";

// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { ButtonLink } from "../../../../shared/components/ButtonLink/ButtonLink";

export const SecInicio = () => {
  

  return (
    <section id="secInicio">
      <div className="contentSec">
        <div className="divImg">
          <img src="./imgs/me.jpg" alt="Foto do Jesse Rodrigues" />
        </div>

        <h1>Olá, Eu sou o Jesse Rodrigues</h1>
        <p className="subtitulo">Desenvolvedor & Designer</p>
        <p className="texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          molestiae quia vero.
        </p>
        <div className="divBotoes">
          <ButtonLink rolarPara={"redesSociais"} tipo={"2"}>Falar comigo</ButtonLink>
          <ButtonLink rolarPara={"secProjetos"} tipo={"3"}>Ver meus trabalhos</ButtonLink>
        </div>
      </div>
    </section>
  );
};
