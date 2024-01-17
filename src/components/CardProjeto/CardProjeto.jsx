/* eslint-disable react/prop-types */
import "./cardProjeto.scss";
import { useState } from "react";
import { useProjetos } from "../../contexts/ProjetosContext";
import ModalProjeto from "../ModalProjeto/ModalProjeto";

const CardProjeto = ({ id }) => {
  const { projetos } = useProjetos();
  const [showModal, setShowModal] = useState(false);
  const projeto = projetos.find((projeto) => projeto.id === id);

  const handleToggleModal = () => {
    setShowModal(!showModal); // Alterna entre exibir e esconder o modal
  };

  if (!projeto) {
    return null;
  }

  return (
    <div className="cardProjeto" key={projeto.id} onClick={handleToggleModal}>
      <div className="div_img">
        <img src={projeto.imgs[0]} alt={`Imagem do projeto ${projeto.name}`} />
      </div>
      <div className="div_info">
        <div className="content">
          <h3>{projeto.name}</h3>
        </div>
      </div>

      {showModal && (
        <ModalProjeto projeto={projeto} onClick={handleToggleModal} />
      )}
    </div>
  );
};

export default CardProjeto;
