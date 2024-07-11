import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import { Logo } from './components/';

export const Header = () => {
    return (
        <MaxWidthContainer className='h-[100px] flex justify-center md:justify-between items-center  bg-preto'>
           <Logo/>
            <nav className='py-4 px-8 bg-cinza text-branco rounded-full fonte-corpo  gap-4 hidden lg:flex'>
                <Link href='/'>Página inicial</Link>
                <Link href='/'>Projetos</Link>
                <Link href='/'>Sobre</Link>
                <Link href='/'>Serviços</Link>
            </nav>
            <div className='botoes'>
                <Link href='/'className='bg-gradient-to-r from-vermelho to-rosa text-white px-8 py-3 rounded-md fonte-titulo font-bold uppercase hidden lg:block'>Contatos</Link>
            </div>
        </MaxWidthContainer>
    );
};
