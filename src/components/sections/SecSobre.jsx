import "./secSobre.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

function SecSobre() {
  return (
    <section id="secSobre">
      <div className="container">
        {/* Criar component "Heeader_Secao" */}
        <div className="header-secao">
          {/* <h2>UM POUCO <span >SOBRE</span> MIM</h2> */}
        </div>

        <div className="div-flex">
          {/* div img */}
          <div className="div-img">
            <img src="https://github.com/ujhessie/imgs/blob/main/portfolio/imgs/me2.jpg?raw=true" />
          </div>
          {/* div img */}

          {/* div textos */}
          <div className="div-textos">
            {/* <div className="cards">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div> */}
            <div className="texto">
            <h2>UM POUCO <span >SOBRE</span> MIM</h2>
              <p className="p-fraco">
                Eu mesmo. Um jovem lindo, cheiroso e charmoso navegando nesse
                mundo da tecnologia.
              </p>
              <p>
                Há dois anos no mundo do{" "}
                <span title="Área do desenvolvimento web destinada na interação do usuário com a página">
                  Front-End
                </span>
                , com a intentção de chegar no{" "}
                <span title="Área do desenvolvimento web voltada para o servidor">
                  Full Stcack
                </span>
                . Tendo grande conhecimento em linguagens como HTML, CSS,
                JavaScript, Além de estar bem familiarizado com algumas das principais
                bibliotecas e frameworks do mercado, como React e TypeScript.
              </p>
              <a href="#" className="a-button">Ver mais sobre o Jesse</a>
            </div>
          </div>
          {/* div textos */}
        </div>
      </div>
    </section>
  );
}

export default SecSobre;

