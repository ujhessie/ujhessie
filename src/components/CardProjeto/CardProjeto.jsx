/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./cardProjeto.scss";

import { useProjetos } from "../../contexts/ProjetosContext";

const CardProjeto = ({ id }) => {
  const { projetos } = useProjetos();

  const projeto = projetos.find((projeto) => projeto.id === id);

  if (!projeto) {
    return null;
  }
  const hendleTop = () => { 
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link to={`/projetos/${id}`} key={projeto.id} onClick={hendleTop}>
      <div className="cardProjeto">
        <div className="divImg">
          <img src={projeto.imgs[0]} alt="" />
        </div>
        <div className="divInfo">
          <p className="nomeProjeto">{projeto.name}</p>
          <p className="descProjeto">{projeto.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProjeto;
