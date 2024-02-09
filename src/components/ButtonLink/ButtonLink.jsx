import React from "react";
import "./buttonLink.scss";
import { Link } from "react-router-dom";

export const ButtonLink = ({
  rota,
  tipo,
  tamanho = "normal",
  rolarParaTopo = false,
  children = "NomeBotao",
  icon,
  rolarPara
}) => {

  const rolarPagina = () => {
    if (rolarParaTopo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (rolarPara) {
      rolarParaId(rolarPara);
    }
  };

  const rolarParaId = (id) => {
    const elemento = document.getElementById(id);
    if(elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Link
      to={rota}
      onClick={rolarPagina}
      className={`buttonLink tipo-${tipo} tamanho-${tamanho}`}
    >
      <p>{children}</p>
      <div className="divIcon">{icon}</div>
    </Link>
  );
};
