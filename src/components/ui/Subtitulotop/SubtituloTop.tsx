export const SubtituloTop = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='subtitulo flex gap-2  items-center'>
            <div className='circle w-3 h-3 bg-gradient-principal rounded-full'></div>
            <p className='inline-block text-base text-azul-acinzentado'>
                {children}
            </p>
        </div>
    );
};
