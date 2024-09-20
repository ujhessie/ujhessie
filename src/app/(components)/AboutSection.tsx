/* eslint-disable @next/next/no-img-element */
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "./../../components/ui/Botao/Botao";
import { SubtituloTop } from "@/components/ui/Subtitulotop/SubtituloTop";

export const AboutSection = () => {
    return (
        <section className='py-32'>
            <MaxWidthContainer>
                <Slide1 />
            </MaxWidthContainer>
        </section>
    );
};

const Slide1 = () => {
    return (
        <div className='grid md:grid-cols-3   items-center   rounded-2xl  gap-8 '>
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
            <div className='text flex flex-col items-start gap-2 col-span-2'>
                <SubtituloTop>Sobre</SubtituloTop>
                <h2 className='text-white'>
                    explore um pouco mais <span>sobre</span> mim
                </h2>
                <p className='text-azul-acinzentado'>
                    Como desenvolvedor Full Stack Júnior, venho atuando nessa
                    área há certos anos e quero construir uma carreira sólida e
                    alcançar bons resultados. Fui criador da Web iNexus e
                    pretendo desenvolver startups e diversos projetos no futuro.
                    Atualmente trabalho como freelancer, tendo como foco o
                    desenvolvimento de sistemas e interfaces, buscando sempre
                    melhorias em minhas habilidades e em meu trabalho.
                </p>
                <p className='text-azul-acinzentado'>
                    Além de programador, tenho uma base sólida em design, uma
                    experiência anterior que me permite misturar essas áreas
                    para entregar soluções mais completas. Também sou apaixonado
                    em compartilhar conhecimento, contribuindo para a educação e
                    ajudando outros a crescerem na área da tecnologia.
                </p>
                <h3 className='text-white'>
                    Algumas das principais <span>tecnologias</span> que utilizo
                </h3>
                <div className='tecnologias flex flex-wrap gap-1'>
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
