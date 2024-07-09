import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";

export const Header = () => {
    return (
        <MaxWidthContainer className='h-[100px] flex justify-between items-center mb-8'>
            <Link href='/' className='logo font-extrabold text-branco text-2xl fonte-titulo texto-gradiente'>
                <span className=' font-extrabold'></span>UJHESSIE
            </Link>
            <nav className='py-4 px-8 bg-cinza text-branco rounded-full fonte-corpo'>
                <Link href='/'>Página inicial</Link>
            </nav>
            <div className='botoes'>
                <Link href='/'>Projetos</Link>
            </div>
        </MaxWidthContainer>
    );
};
