import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import { RedesSociais } from "../RedesSociais/RedesSociais";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const BannerContato = () => {
    const IconRedeSocial = ({
        icon,
        url = "#",
    }: {
        icon: React.ReactNode;
        url?: string;
    }) => {
        return (
            <Link
                className='p-3 my-transition bg-gradient-principal/10 hover:bg-gradient-principal hover:scale-110 rounded-full '
                href={url}
            >
                {icon}
            </Link>
        );
    };

    return (
        <MaxWidthContainer className=''>
            <div className=' text-white p-8 md:p-16 bg-preto rounded-2xl'>
                <h2>Tem um projeto em mente?</h2>
                <p className='mb-4 text-azul-acinzentado'>
                    Entre em contato comigo através das minhas redes sociais e
                    solicite um <strong>orçamento gratuito</strong>.
                </p>
                <div className='icons-redes-sociais flex flex-wrap gap-1'>
                    <IconRedeSocial
                        url='https://github.com/ujhessie/'
                        icon={<Github className=' w-10 h-full' />}
                    />
                    <IconRedeSocial
                        url='https://www.instagram.com/ujhessie/'
                        icon={<Instagram className=' w-10 h-full' />}
                    />
                    <IconRedeSocial
                        url='https://www.linkedin.com/in/jesserodrigues4502/'
                        icon={<Linkedin className=' w-10 h-full' />}
                    />
                    <IconRedeSocial
                        url='mailto:juniorrodrigues4502@gmail.com'
                        icon={<Mail className=' w-10 h-full' />}
                    />
                </div>
            </div>
        </MaxWidthContainer>
    );
};
