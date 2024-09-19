/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href='/' className='logo  flex text-white items-center gap-4'>
            <img src='/images/logo.svg' className='w-[150px]' alt='' />
        </Link>
    );
};
