import Link from "next/link";
import MaxWidthContainer from "./MaxWidthContainer";

interface HeaderProps {
    fullWidth?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fullWidth = true }) => {
    const Content = () => {
        return (
            <header className='flex justify-center py-8 items-center bg-zinc-950 my-4 rounded-lg'>
                <div className=''>
                    <Link
                        href='/'
                        className='font-semibold text-xl md:text-2xl'
                    >
                        PORTFOLIO | <span className='font-black'>UJHESSIE</span>
                    </Link>
                </div>
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
