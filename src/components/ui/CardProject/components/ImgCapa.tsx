/* eslint-disable @next/next/no-img-element */

export const ImgCapa: React.FC<{ url: string | undefined }> = ({ url }) => {
    return (
        <>
            <img
                src={url}
                className='absolute w-full h-full object-cover my-transition'
                alt='Imagem capa'
            />
        </>
    );
};
