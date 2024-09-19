import { TbMenu } from "react-icons/tb";
import Link from "next/link";

export const Botoes = () => {
    function abrirNav() {
        document.querySelector(".nav-header")?.classList.add("nav-ativa");
    }

    return (
        <div className='botoes z-20 flex gap-4'>
            <Link
                href='#div-projetos'
                className='hidden md:block rounded-full text-white bg-gradient-principal text-base font-corpo p-[3px] '
            >
                <div className='content   py-3 px-8 bg-preto-escuro rounded-full'>
                    Ver Projetos
                </div>
            </Link>
            <div className='botao-menu md:hidden relative h-full bg-cinza text-white py-6 rounded-md px-8 flex itens-center justfy-center'>
                <TbMenu
                    className='absolute z-10 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-3xl'
                    onClick={abrirNav}
                />
            </div>
        </div>
    );
};

export default Botoes;
