import "./secUltimosProjetos.scss";
import CardProjeto from "../../layouts/CardProjeto";

// import CarrosselSlides from "./carrosselSlides/CarrosselSlides";

function SecUltimosProjetos() {
  return (
    <section id="secUltimosProjetos">
      <div className="container">
      <h2>ÚLTIMOS <span className="destaque">TRABALHOS</span></h2>
        <div className="carrossel">
          <CardProjeto id={2} />
        </div>
      </div>
    </section>
  );
}

export default SecUltimosProjetos;
