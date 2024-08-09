import { useEffect } from 'react';
import { Botao } from '../ui/Botao/Botao';
import MaxWidthContainer from "../ui/MaxWidthContainer";

// Importação do scrrol reveal
import ScrollReveal from "scrollreveal";

export default function HeroSection() {

     // Configuração do scrrol reveal
     useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            reset: true,
        });
    }, []);
    return (
        <MaxWidthContainer className='text-center py-40'>
            <h1 className='uppercase reveal text-white'>Jesse Rodrigues</h1>
            <p className='subtitulo reveal texto-gradiente font-bold fonte-titulo mb-8 text-2xl lg:text-3xl'>
                Desenvolvedor Web
            </p>
            <div className="botoes reveal flex justify-center gap-4">
                <Botao className="reveal" rota='#div-rojetos'>Projetos</Botao>
                {/* <Botao tipo='transparente'>Sobre</Botao> */}
            </div>
        </MaxWidthContainer>
    );
}
