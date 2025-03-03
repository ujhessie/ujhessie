// import { useMemo } from "react";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import { SubtituloTop } from "../../../components/Subtitulotop/SubtituloTop";
// import { useProjetos } from "../../../contexts/ProjetosContexts";
// import { Link } from "react-router-dom";
import { Botao } from "../../../components/Botao/Botao";
// import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className=" -mt-[230px] ">
      <MaxWidthContainer className=" py-32 pt-[330px]  gap-4 grid lg:grid-cols-4">
        <Div_text />
      </MaxWidthContainer>
    </section>
  );
};

const Div_text = () => {
  return (
    <div className="text-white flex flex-col md:justify-start gap-2 justify-center text-center md:text-start lg:col-span-3">
      <div className="text-center md:text-start">
        <SubtituloTop>Olá! Bem vindos!</SubtituloTop>
      </div>
      <h1 className="m-0 leading-none">jesse rodrigues</h1>
      <div>
        <span className="bg-gradient-principal inline-block text-3xl  md:text-5xl lg:text-6xl font-titulo -mt-2  bg-clip-text text-transparent">
          Desenvolvedor & designer
        </span>
      </div>
      <p className="text-azul-acinzentado lg:w-[60%]">
        É muito bom te ver por aqui. Fique a vontade e
        <strong> explore meus projetos</strong> e um pouco
        <strong> sobre mim</strong>. Qualquer dúvida é só entrar em contato
        comigo.
      </p>
      <Botoes />
    </div>
  );
};


const Botoes = () => {
  return (
    <div className="div-botoes flex flex-wrap justify-center md:justify-start  gap-2">
      <Botao rota="/#sec-sobre-mim">Ver mais sobre mim</Botao>
      <Botao rota="/projetos" tipo="secundario">
        Meus projetos
      </Botao>
    </div>
  );
};
