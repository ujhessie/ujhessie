/* eslint-disable react/prop-types */

import "./modalProjeto.scss";
import { useEffect, useState } from "react";

const ModalProjeto = ({ projeto, onClose }) => {
  if (!projeto) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="div_img">
          <img src={projeto.imgs[0]} />
        </div>
        <h2 className="nomeProjeto">{projeto.name}</h2>
        <div className="div_botoes">
          <a href={projeto.linkVisitar} target="_blank" className="a_button1">
            Visitar projeto
          </a>
          <a href={projeto.linkDeploy} target="_blank" className="a_button2">
            Ver mais sobre ele
          </a>
        </div>
        <p className="desc text">
          {projeto.desc}
        </p>
      </div>
    </div>
  );
};

export default ModalProjeto;
