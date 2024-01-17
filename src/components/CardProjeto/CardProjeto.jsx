/* eslint-disable react/prop-types */

import "./cardProjeto.scss";
import { useProjetos } from "../../contexts/ProjetosContext";

const CardProjeto = ({ id }) => {
  const { projetos } = useProjetos();

  const projeto = projetos.find((projeto) => projeto.id === id);

  if (!projeto) {
    return null;
  }

  return (
    <div className="cardProjeto" key={projeto.id}>
      <div className="div_img">
        <img src={projeto.imgs[0]} alt={`Imagem do projeto ${projeto.name}`} />
      </div>
      <div className="div_info">
        <div className="content">
          <h3>{projeto.name}</h3>
        </div>
      </div>
      <div className="teste">
        
      </div>
    </div>
  );
};

export default CardProjeto;
