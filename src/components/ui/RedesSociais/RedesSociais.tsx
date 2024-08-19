import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const RedesSociais = () => {
    const RedeSocial = ({
        icon = "",
        url,
    }: {
        url: string;
        icon?: React.ReactNode;
    }) => {
        return (
            <a
                href={url}

                target='_blank'
                className=' text-2xl  text-white p-3 bg-zinc-950/50 rounded-full'
            >
                {icon}
            </a>
        );
    };

    return (
        <div className='flex reveal justify-center gap-2 mb-4'>
            <RedeSocial
                icon={<FaGithub />}
                url='https://github.com/ujhessie/'
            />

            <RedeSocial
                icon={<FaLinkedin />}
                url='https://www.linkedin.com/in/jesserodrigues4502/'
            />

<RedeSocial
                icon={<FaInstagram />}
                url='https://www.instagram.com/ujhessie/'
            />
          
        </div>
    );
};