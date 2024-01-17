
import "./modalProjeto.scss";

const ModalProjeto = ({ projeto, onClose }) => {
  if (!projeto) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{projeto.name}</h2>
        <div className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas, provident libero inventore nobis similique, cumque debitis repudiandae quas dicta magnam praesentium distinctio labore quasi, modi dolorem? Architecto, laudantium animi.</div>
      </div>
    </div>
  );
};

export default ModalProjeto;
