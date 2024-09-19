import { TfiClose } from "react-icons/tfi";
import Link from "next/link";

export const Nav = () => {
    function fecharNav() {
        document.querySelector(".nav-header")?.classList.remove("nav-ativa");
    }

    return (
        <nav className='nav-header bg-preto-claro text-branco  lg:pt-4 py-4 px-16 border border-azul-escuro-fosco md:rounded-full font-corpo'>
            <div className='content gap-4'>
                <div className='div-close md:hidden' onClick={fecharNav}>
                    <TfiClose className='icon text-3xl' />
                </div>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/'
                    onClick={fecharNav}
                >
                    Início
                </Link>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/'
                    onClick={fecharNav}
                >
                    Destaques
                </Link>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/'
                    onClick={fecharNav}
                >
                    Sobre
                </Link>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/projetos'
                    onClick={fecharNav}
                >
                    Projetos
                </Link>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/'
                    onClick={fecharNav}
                >
                    Serviços
                </Link>
                <Link
                    className='hover:bg-gradient-principal hover:bg-clip-text hover:text-transparent my-transition hover:scale-110 p-2'
                    href='/'
                    onClick={fecharNav}
                >
                    Contatos
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
