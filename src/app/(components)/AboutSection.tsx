/* eslint-disable @next/next/no-img-element */
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "./../../components/ui/Botao/Botao";
import { SubtituloTop } from "@/components/ui/Subtitulotop/SubtituloTop";

export const AboutSection = () => {
    return (
        <section id='sec-sobre' className='py-32' >
            <MaxWidthContainer>
                <Slide1 />
            </MaxWidthContainer>
        </section>
    );
};

const Slide1 = () => {
    return (
        <div className='flex flex-col justify-center  md:grid md:grid-cols-3   items-center   rounded-2xl  gap-8 '>
            <div className='img relative col-span-1  rounded-full   w-full h-full'>
                <div className='div-bg absolute -translate-x-2 translate-y-2 md:translate-x-0 md:translate-y-0  z-10 top-0 left-0 rounded-full  bg-white w-full'></div>
                <div className='relative'>
                    <img
                        className='z-20  w-1/2   left-1/2 translate-x-1/2 md:translate-x-0 md:translate-y-0  md:w-full h-full md:top-0 md:left-0 object-cover'
                        src='https://avatars.githubusercontent.com/u/98673779?v=4'
                        alt=''
                    />
                </div>
            </div>
            <div className='text flex flex-col items-center md:items-start md:justify-start  text-center md:text-start gap-2 col-span-2'>
                <div className='flex justify-center md:justify-start text-center md:text-start'>
                    <SubtituloTop>Sobre</SubtituloTop>
                </div>
                <h2 className='text-white text-center md:text-start'>
                    explore um pouco mais <span>sobre</span> mim
                </h2>
                <p className='text-azul-acinzentado'>
                    Como <strong>desenvolvedor Full Stack Júnior</strong>, venho
                    atuando nessa área há certos anos e quero construir uma{" "}
                    <strong>carreira sólida</strong> e alcançar bons resultados.
                    Fui criador da <strong>Web iNexus</strong> e pretendo
                    desenvolver <strong>startups</strong> e diversos{" "}
                    <strong>projetos</strong> no futuro. Atualmente trabalho
                    como <strong>freelancer</strong>, tendo como foco o
                    desenvolvimento de <strong>sistemas</strong> e{" "}
                    <strong>interfaces</strong>, buscando sempre melhorias em
                    minhas <strong>habilidades</strong> e em meu trabalho.
                </p>
                <p className='text-azul-acinzentado'>
                    Além de <strong>programador</strong>, tenho uma base sólida
                    em <strong>design</strong>, uma experiência anterior que me
                    permite misturar essas áreas para entregar soluções mais
                    completas. Também sou apaixonado em{" "}
                    <strong>compartilhar conhecimento</strong>, contribuindo
                    para a <strong>educação</strong> e ajudando outros a
                    crescerem na área da <strong>tecnologia</strong>.
                </p>

                <h3 className='text-white'>
                    Algumas das principais <span>tecnologias</span> que utilizo
                </h3>
                <div className='tecnologias flex flex-wrap gap-1 justify-center md:justify-start'>
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-1.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-2.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-3.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-4.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-5.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-6.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-7.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-8.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-9.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-10.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-11.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-12.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-13.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-14.svg'
                        alt=''
                    />
                    <img
                        className='bg-preto-escuro p-1 rounded-xl w-16'
                        src='/images/icons/Tech Stack Logos-15.svg'
                        alt=''
                    />
                </div>
                <Botao
                    rota='/projetos'
                    className='text-white'
                    tipo='transparente'
                >
                    Meus projetos
                </Botao>
            </div>
        </div>
    );
};

const Slide2 = () => {
    return (
        <div className='grid grid-cols-3   items-center bg-preto-claro p-16 rounded-2xl shadow-xl gap-8 '>
            <div className='text flex flex-col items-start gap-2 col-span-2'>
                <SubtituloTop>Sobre</SubtituloTop>
                <h2 className='text-white'>
                    Algumas das principais{" "}
                    <span className='bg-gradient-principal bg-clip-text text-transparent'>
                        tecnologias
                    </span>{" "}
                    que utilizo
                </h2>

                <Botao className='text-white' tipo='transparente'>
                    Meus projetos
                </Botao>
            </div>
            <div className='img relative col-span-1  rounded-full   w-full h-full'>
                <div className='div-bg absolute -translate-x-2 translate-y-2  z-10 top-0 left-0 rounded-full  bg-white w-full'></div>
                <div className='relative'>
                    <img
                        className='z-20  w-full h-full top-0 left-0 object-cover'
                        src='https://avatars.githubusercontent.com/u/98673779?v=4'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};
