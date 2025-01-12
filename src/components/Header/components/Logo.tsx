import { Link } from 'react-router-dom';


export const Logo = () => {
    return (
        <Link to='/' className='logo  flex text-white items-center gap-4'>
            <img src='/images/logo.svg' className='w-[150px]' alt='' />
        </Link>
    );
};
