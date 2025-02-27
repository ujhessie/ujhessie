import { useMemo } from "react";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import { SubtituloTop } from "../../../components/Subtitulotop/SubtituloTop";
import { useProjetos } from "../../../contexts/ProjetosContexts";
// import { Link } from "react-router-dom";
import { Botao } from "../../../components/Botao/Botao";
// import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
    return (
        
        <section className=' relative  overflow-hidden -mt-[230px] '>
            <div className='div-content-projetos-sec-inicio right-1/2  absolute translate-x-1/2 w-full h-full  '>
                <Bg_projetos />
            </div>
            <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-r from-preto-escuro/50 to-transparent'></div>
            <MaxWidthContainer className=' py-32 pt-[330px]  gap-4 grid lg:grid-cols-4'>
                <Div_text />
                {/* <div className='text-white w-full h-full lg:col-span-1'>
                    <RedesSociais />
                </div> */}
            </MaxWidthContainer>
        </section>
    );
};

const Div_text = () => {
    return (
        <div className='text-white flex flex-col md:justify-start gap-2 justify-center text-center md:text-start lg:col-span-3'>
            <div className='text-center md:text-start'>
                <SubtituloTop>Olá! Bem vindos!</SubtituloTop>
            </div>
            <h1 className='m-0 leading-none'>jesse rodrigues</h1>
            <div>
                <span className='bg-gradient-principal inline-block text-3xl  md:text-5xl lg:text-6xl font-titulo -mt-2  bg-clip-text text-transparent'>
                    Desenvolvedor & designer
                </span>
            </div>
            <p className='text-azul-acinzentado lg:w-[60%]'>
                É muito bom te ver por aqui. Fique a vontade e
                <strong> explore meus projetos</strong> e um pouco
                <strong> sobre mim</strong>. Qualquer dúvida é só entrar em
                contato comigo.
            </p>
            <Botoes />
        </div>
    );
};

const Bg_projetos = () => {
    const { projetos } = useProjetos();

    // Filtra as imagens de capa dos projetos
    const images: string[] = useMemo(() => {
        return projetos
            .map((projeto) => projeto.imagens.imgCapa)
            .filter((img): img is string => img !== undefined);
    }, [projetos]);

    // Renderiza uma linha de imagens
    const renderImageRow = (className: string) => (
        <div
            className={`row-image ${className} flex justify-center w-full h-1/3 gap-2`}
        >
            {images.map((image, index) => (
                <img
                    key={`${className}-${index}`}
                    className='block w-full h-full aspect-[4/3] object-cover opacity-75'
                    src={image}
                    alt={`Imagem ${index + 1}`}
                />
            ))}
        </div>
    );

    return (
        <div className='div-imgs h-full absolute w-1/2 left-1/2 -translate-x-1/5 flex flex-col gap-2 -z-20 -rotate-[35deg] scale-100'>
            {renderImageRow("left")}
            {renderImageRow("right")}
            {renderImageRow("left")}
        </div>
    );
};

// const RedesSociais = () => {
//     const IconRedeSocial = ({
//         icon,
//         url = "#",
//     }: {
//         icon: React.ReactNode;
//         url?: string;
//     }) => {
//         return (

//             <Link
//                 className='p-3 my-transition bg-gradient-principal/10 bg-gradient-principal hover:scale-110 rounded-full shadow-xl  '
//                 to={url}
//             >
//                 {icon}
//             </Link>
//         );
//     };

//     return (
//         <div className='icons-redes-sociais flex gap-4 justify-center lg:justify-center  md:items-end md:justify-start lg:flex-col  h-full '>
//             <IconRedeSocial
//                 url='https://github.com/ujhessie/'
//                 icon={<Github className=' w-8 h-full' />}
//             />
//             <IconRedeSocial
//                 url='https://www.instagram.com/ujhessie/'
//                 icon={<Instagram className=' w-8 h-full' />}
//             />
//             <IconRedeSocial
//                 url='https://www.linkedin.com/in/jesserodrigues4502/'
//                 icon={<Linkedin className=' w-8 h-full' />}
//             />
//             <IconRedeSocial
//                 url='mailto:juniorrodrigues4502@gmail.com'
//                 icon={<Mail className=' w-8 h-full' />}
//             />
//         </div>
//     );
// };

const Botoes = () => {
    return (
        <div className='div-botoes flex flex-wrap justify-center md:justify-start  gap-2'>
            <Botao rota='/#sec-sobre-mim'>Ver mais sobre mim</Botao>
            <Botao rota='/projetos' tipo='secundario'>
                Meus projetos
            </Botao>
        </div>
    );
};
