import { TfiClose } from "react-icons/tfi";
import Link from "next/link";

export const Nav = () => {
    function fecharNav() {
        document.querySelector(".nav-header")?.classList.remove("nav-ativa");
    }

    return (
        <nav className='nav-header bg-preto-claro text-branco  lg:pt-6 py-6 px-16 border border-azul-escuro-fosco md:rounded-full font-corpo'>
            <div className='content gap-6'>
                <div className='div-close md:hidden' onClick={fecharNav}>
                    <TfiClose className='icon text-3xl' />
                </div>
                <Link href='/' onClick={fecharNav}>
                    Início
                </Link>
                <Link href='/' onClick={fecharNav}>
                    Destaques
                </Link>
                <Link href='/' onClick={fecharNav}>
                    Sobre
                </Link>
                <Link href='/projetos' onClick={fecharNav}>
                    Projetos
                </Link>
                <Link href='/' onClick={fecharNav}>
                    Serviços
                </Link>
                <Link href='/' onClick={fecharNav}>
                    Contatos
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
