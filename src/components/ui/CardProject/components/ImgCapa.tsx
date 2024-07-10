/* eslint-disable @next/next/no-img-element */

export const ImgCapa: React.FC<{ url: string | undefined }> = ({ url }) => {
    return (
        <div className=' aspect-[4/3] h-full w-full relative rounded-xl overflow-hidden'>
            <img
                src={url}
                className='imagem-capa absolute w-full h-full left-0 top-0 object-cover my-transition'
                alt='Imagem capa'
            />
        </div>
    );
};
