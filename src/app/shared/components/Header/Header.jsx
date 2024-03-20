import { Link } from "react-router-dom";
import "./header.scss";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";

function Header() {
  const [togleMenu, setTogleMenu] = useState("");

  return (
    <header id="header">
      <div className="contentHeader">
        <div className="divLogoENav">
          <Link className="logo">UJHESSIE</Link>
          <nav className={`navHeader ${togleMenu}`}>
            <Link className="itemNavHeader paragrafo">Inicio</Link>
            <Link className="itemNavHeader paragrafo">Serviços</Link>
            <Link className="itemNavHeader paragrafo">Projetos</Link>
            <Link className="itemNavHeader paragrafo">Sobre</Link>
          </nav>
        </div>
        <div className="divBotoes">
          <Link to="/" className="aContato paragrafo">
            Entrar em contato
          </Link>
          {togleMenu === "" && (
            <button
              onClick={() => {
                setTogleMenu("menuAtivo");
              }}
            >
              <CgMenuRight className="icon" />
            </button>
          )}
          {togleMenu === "menuAtivo" && (
            <button
              onClick={() => {
                setTogleMenu("");
              }}
            >
              <IoClose className="icon" />
            </button>
          )}
        </div>
      </div>

      {/* <div className="contentHeader">
        <div className="div1">
          <Link className="logo" to="/">
            UJHESSIE
          </Link>
          <nav className={`navHeader ${togleMenu}`}>
            <Link className="itemNavHeader">Inicio</Link>
            <Link className="itemNavHeader">Serviços</Link>
            <Link className="itemNavHeader">Projetos</Link>
            <Link className="itemNavHeader">Sobre</Link>
          </nav>
        </div>
        <div className="divBotoes">
          <ButtonLink className="botaoContato" tipo="2">CONTATO</ButtonLink>
          {togleMenu === "" && (
            <button 
              onClick={() => {
                setTogleMenu("menuAtivo");
              }}
            >
              <CgMenuRight className="icon" />
            </button>
          )}
          {togleMenu === "menuAtivo" && (
            <button
            
              onClick={() => {
                setTogleMenu("");
              }}
            >
              <IoClose className="icon" />
            </button>
          )}
        </div>
      </div> */}
    </header>
  );
}

export default Header;
