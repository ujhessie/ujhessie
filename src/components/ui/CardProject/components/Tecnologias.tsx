import Tags from "../../Tags/Tags";

export const Tecnologias: React.FC<{ tecnologias: string[] | undefined }> = ({
    tecnologias,
}) => {
    return (
        <div className='absolute w-full h-full left-0 top-0 p-4 opacity-0 hover:opacity-100'>
            <div className='flex justify-end gap-1'>
                {tecnologias
                    ? tecnologias?.map((tecnologia) => (
                          <Tags
                              key={tecnologia}
                              text={tecnologia}
                              className='text-[8px] md:text-[10px] my-transition lg:text-[12px] px-2 py1'
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
