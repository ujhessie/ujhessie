'use client'

import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import { TbMenu } from "react-icons/tb";
import { Logo } from "./components/";
import { TfiClose } from "react-icons/tfi";
import "./header.css";

export const Header = () => {
    function fecharNav () {
        document.querySelector(".nav-header")?.classList.remove("nav-ativa")
    }
    function abrirNav () {
        document.querySelector(".nav-header")?.classList.add("nav-ativa")
    }

    return (
        <MaxWidthContainer className='h-[100px] z-20 flex justify-between items-center  bg-preto'>
            <Logo />
            <nav className=' nav-header   lg:bg-cinza text-branco  fonte-corpo   '>
                <div className='content   gap-4'>
                    <div className='div-close md:hidden' onClick={fecharNav} >
                        <TfiClose className='icon text-3xl' />
                    </div>
                    <Link href='/'onClick={fecharNav}>Página inicial</Link>
                    <Link href='/projetos' onClick={fecharNav}>Projetos</Link>
                    {/* <Link href='/' onClick={fecharNav}>Sobre</Link>
                    <Link href='/' onClick={fecharNav}>Serviços</Link> */}
                </div>
            </nav>
            <div className='botoes z-20 flex gap-4'>
                <Link
                    href='#div-projetos'
                    className='bg-gradient-to-r from-vermelho to-rosa text-white px-8 py-3 rounded-md fonte-titulo font-bold uppercase hidden md:block'
                >
                    Projetos
                </Link>
                <div className='botao-menu md:hidden relative h-full bg-cinza text-white py-6 rounded-md px-8 flex itens-center justfy-center' >
                    <TbMenu className='absolute z-10 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  text-3xl' onClick={abrirNav} />
                </div>
            </div>
        </MaxWidthContainer>
    );
};
