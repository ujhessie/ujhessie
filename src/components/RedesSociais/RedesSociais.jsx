import { SecaoContainer, ContentSecao } from "../SecaoContainer/SecaoContainer";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import "./redesSociais.scss";

export const RedesSociais = () => {
  const RedeSocial = ({ link, children = "Rede social", icon }) => {
    return (
      <a href={link} target="_blank" className="redeSocial">
        <div className="divIcon">{icon}</div>
        <p>{children}</p>
      </a>
    );
  };

  return (
    <SecaoContainer id=".secRedesSociais">
      <ContentSecao>
      <div className="conteudo" id="redesSociais">
        <h2>Você tem interesse em trabalhar comigo?</h2>
        <div className="divRedesSociais">
          <RedeSocial link={"https://github.com/ujhessie"} icon={<FaGithub />}>
            GitHub
          </RedeSocial>
          <RedeSocial
            link={"https://www.instagram.com/ujhessie_/"}
            icon={<RiInstagramFill />}
          >
            Instagram
          </RedeSocial>
          <RedeSocial
            link={"https://www.linkedin.com/in/jesserodrigues4502/"}
            icon={<FaLinkedin />}
          >
            LinkedIn
          </RedeSocial>
          <RedeSocial
            link={"https://wa.me/+5598988740103"}
            icon={<IoLogoWhatsapp />}
          >
            WhatsApp
          </RedeSocial>
        </div>
        <p>
          Entre em contato comigo através das minhas redes sociais ou envie-me
          um email através de <a href="#">juniorrodrigues4502@gmail.com.</a>
        </p>
      </div>
      </ContentSecao>
    </SecaoContainer>
  );
};
