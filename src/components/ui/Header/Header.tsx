import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import { Logo } from './components/';

export const Header = () => {
    return (
        <MaxWidthContainer className='h-[100px] flex justify-between items-center mb-8'>
           <Logo/>
            <nav className='py-4 px-8 bg-cinza text-branco rounded-full fonte-corpo'>
                <Link href='/'>Página inicial</Link>
            </nav>
            <div className='botoes'>
                <Link href='/'>Projetos</Link>
            </div>
        </MaxWidthContainer>
    );
};
