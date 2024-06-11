import Link from 'next/link';
import MaxWidthContainer from "./MaxWidthContainer";

interface HeaderProps {
  fullWidth?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fullWidth = true }) => {
  const Content = () => {
    return (
      <header className='flex justify-between py-4 items-center'>
        <Link href='/'>LOGO</Link>
        <nav className='flex gap-4 bg-gray-800 py-4 px-8 rounded-full'>
          <a href=''>Início</a>
          <a href=''>Projetos</a>
          <a href=''>Sobre</a>
        </nav>
      </header>
    );
  };

  return fullWidth ? (
    <Content />
  ) : (
    <MaxWidthContainer>
      <Content />
    </MaxWidthContainer>
  );
};

export default Header;
