import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import "./secSobre.scss";
import { MdArrowOutward } from "react-icons/md";

export const SecSobre = () => {
  return (
    <section id="secSobre">
      <div className="divContentSecSobre">
        <div className="divFlex">
          <a href="#" className="nomeSec">
            sobre
          </a>
          <h2>Um pouco sobre mim</h2>
          <ButtonLink
            rolarParaTopo={true}
            tipo={3}
            rota={"/projetos"}
            icon={<MdArrowOutward />}
          >
            Meus projetos
          </ButtonLink>
        </div>
        <div className="divFlex">
          <p className="destaque">
            Construindo Experiências Digitais Memoráveis: Desenvolvedor
            Front-end e Designer Apaixonado pela Inovação
          </p>
          <p className="">
            Desenvolvedor web freelancer apaixonado por transformar ideias em
            interfaces excepcionais. Com expertise em HTML, JavaScript,
            React.js, Sass e Figma, estou pronto para colaborar na construção de
            projetos extraordinários. Vamos criar juntos uma presença online
            impactante e funcional!
          </p>
        </div>
      </div>
    </section>
  );
};

{
  /* <div className="container">
<div className="div_img">
    <img src="imgs/me2.png" alt="" />
</div>
<div className="div_info">
    <h2>Um pouquinho <span>sobre</span> o Jesse</h2>
    <ul className="marcadores">
        <li>Frond End</li>
        <li>React Js</li>
        <li>TypeScript</li>
        <li>Designer</li>
    </ul>
    <p className="p_fraco">Eu mesmo. Um jovem lindo, cheiroso e charmoso navegando nesse mundo da tecnologia.</p>
    <p>Freelancer há dois anos no mundo do desenvolvimeto web eu sigo evoluindo nessa e outras áreas...</p>
    <p></p>
    <div className="div_botoes">
        <a href="" className="a_button1">Mais sobre eu</a>
        <a href="" className="a_button2">Meus Projetos</a>
    </div>
</div>
</div> */
}
