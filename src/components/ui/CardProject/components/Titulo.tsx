export const Titulo: React.FC<{ titulo: string | undefined }> = ({
    titulo,
}) => {
    return (
        <div>
            <p className='titulo-card-projeto  my-transition opacity-80  text-white leading-tight lett  text-[12px] md:text-[12px] lg:text-[14px] font-semibold'>
                {titulo}
            </p>
        </div>
    );
};
