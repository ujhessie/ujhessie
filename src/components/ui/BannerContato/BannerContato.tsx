import MaxWidthContainer from '../MaxWidthContainer';
import { RedesSociais } from "../RedesSociais/RedesSociais";

/* eslint-disable @next/next/no-img-element */
export const BannerContato = () => {
    return (
       <MaxWidthContainer>
         <div className='bg-gradient-to-r from-vermelho to-rosa text-white rounded-xl px-4 py-6'>
            <h2>Tem um projeto em mente?</h2>
            <p className='mb-4'>
                Entre em contato comigo através das minhas redes sociais e
                solicite um <strong>orçamento gratuito</strong>.
            </p>
            <RedesSociais />
        </div>
       </MaxWidthContainer>

    );
};
