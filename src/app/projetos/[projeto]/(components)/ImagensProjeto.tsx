/* eslint-disable @next/next/no-img-element */
"use client";


export const ImagensProjeto: React.FC<{ imagens: string[] }> = ({
    imagens,
}) => {
    return (
        <div id="div-imagens-page-projeto" className='grid gap-4 grid-cols-1'>
            {imagens.map((img, index) => (
                <img
                    key={index}
                    className='w-full mb-4  rounded-xl block '
                    // className='w-full reveal rounded-xl block mb-4'
                    src={img}
                    alt={`Imagem do projeto ${index + 1}`}
                />
            ))}
        </div>
    );
};
