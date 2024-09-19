"use client";

import MaxWidthContainer from "../MaxWidthContainer";
import { Botoes, Logo, Nav } from "./components";

import "./header.css";

export const Header = () => {
    return (
        <header className='border-b border-azul-escuro-fosco py-4 items-center'>
            <MaxWidthContainer className=' z-20 flex justify-between items-center  '>
                <Logo />
                <Nav />
                <Botoes />
            </MaxWidthContainer>
        </header>
    );
};

export default Header;
