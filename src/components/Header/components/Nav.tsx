import { TfiClose } from "react-icons/tfi";

import MaxWidthContainer from "../../MaxWidthContainer";
import { Link } from 'react-router-dom';

const NavLink = ({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <Link
        className='hover:bg-gradient-principal md:hover:bg-clip-text md:hover:text-transparent my-transition hover:scale-110 lg:p-2 my-transition inline-block text-center p-6 md:inline w-full   mb-4 lg:mb-0'
        to={href}
        onClick={onClick}
    >
        {children}
    </Link>
);

export const Nav = () => {
    function fecharNav() {
        document.querySelector(".nav-header")?.classList.remove("nav-ativa");
    }

    return (
        <nav className='nav-header bg-preto-claro text-branco py-4 px-16 border border-azul-escuro-fosco md:rounded-full font-corpo'>
            <div className='content gap-4'>
                <MaxWidthContainer className='relative w-full justify-center mt-4 hover:scale-105 cursor-pointer my-transition px-0 py-4 flex md:hidden '>
                    <div
                        className='md:hidden inline-flex  justify-center items-center border border-white p-2 rounded-full '
                        onClick={fecharNav}
                    >
                        <TfiClose className='icon text-3xl' />
                    </div>
                </MaxWidthContainer>

                <div className='flex-col lg:flex-row gap-8'>
                    <NavLink href='/' onClick={fecharNav}>
                        Início
                    </NavLink>
                    <NavLink href='/#sec-sobre-mim' onClick={fecharNav}>
                        Sobre
                    </NavLink>
                    <NavLink href='/projetos' onClick={fecharNav}>
                        Projetos
                    </NavLink>
                    <NavLink href='/#sec-contatos' onClick={fecharNav}>
                        Contatos
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
