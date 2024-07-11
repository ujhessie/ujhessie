import { Botao } from '../ui/Botao/Botao';
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function HeroSection() {
    return (
        <MaxWidthContainer className='text-center py-40'>
            <h1 className='uppercase text-white'>Jesse Rodrigues</h1>
            <p className='subtitulo texto-gradiente font-bold fonte-titulo mb-8 text-2xl lg:text-3xl'>
                Desenvolvedor Web
            </p>
            <div className="botoes flex justify-center gap-4">
                <Botao>Projetos</Botao>
                <Botao tipo='transparente'>Sobre</Botao>
            </div>
        </MaxWidthContainer>
    );
}
