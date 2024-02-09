import "./footer.scss";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const ContainerSec = ({ children }) => {
    return (
      <section className="ContainerSec">
        <div className="contentSec">{children}</div>
      </section>
    );
  };

  const RedeSocial = () => {
    return (
      <a href="#" target="_blank" className="redeSocial">
        <div className="divIcon">
          <FaGithub className="icon" />
        </div>
        <p>GitHub</p>
      </a>
    );
  };

  return (
    <footer id="footer">
      <ContainerSec>
        <div className="div">
          <h2>Vamos conversar</h2>
          <p className="subtitulo">
            Tem um projeto em mente? Entre em contato comigo ou acesse minhas
            redes sociais.
          </p>
          <div className="redesSociais">
            <RedeSocial />
            <RedeSocial />
            <RedeSocial />
            <RedeSocial />
            <RedeSocial />
          </div>
        </div>

        <div className="divImg">
          <img src="./imgs/me2.png" alt="" />
        </div>
      </ContainerSec>
    </footer>
  );
};

export default Footer;
