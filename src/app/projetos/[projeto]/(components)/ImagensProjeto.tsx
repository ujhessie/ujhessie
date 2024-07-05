/* eslint-disable @next/next/no-img-element */
"use client";

export const ImagensProjeto: React.FC<{ imagens: string[] }> = ({
    imagens,
}) => {
    return (
        <>
            {imagens.map((img, index) => (
                <img
                    key={index}
                    className='w-full  rounded-xl block mb-4'
                    // className='w-full reveal rounded-xl block mb-4'
                    src={img}
                    alt={`Imagem do projeto ${index + 1}`}
                />
            ))}
        </>
    );
};
