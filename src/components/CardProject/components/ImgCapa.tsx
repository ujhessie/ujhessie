

import { SubtituloTop } from '../../Subtitulotop/SubtituloTop';

export const ImgCapa: React.FC<{
    url: string | undefined;
    status?: string;
}> = ({ url, status }) => {
    
    return (
        <div className=' aspect-[4/3] h-full w-full relative rounded-xl overflow-hidden'>
            {status == "Em desenvolvimento" ? (
                <div className='text-white z-10 absolute right-2 bottom-2 py-1 px-4 text-[12px] bg-preto-escuro/50 font-bold rounded-full'>
                   <SubtituloTop> Projeto em desenvolvimento</SubtituloTop>
                </div>
            ) : null}

            <img
                src={url}
               
                className='imagem-capa absolute w-full h-full left-0 top-0 object-cover my-transition'
                alt='Imagem capa'
            />
        </div>
    );
};
