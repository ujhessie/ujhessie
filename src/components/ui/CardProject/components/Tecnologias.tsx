import Tags from "../../Tags/Tags";

export const Tecnologias: React.FC<{ tecnologias: string[] | undefined }> = ({
    tecnologias,
}) => {
    return (
  
            <div className='flex gap-1 flex-wrap'>
                {tecnologias
                    ? tecnologias?.map((tecnologia) => (
                          <Tags
                              key={tecnologia}
                              text={tecnologia}
                              className='text-[8px] text-branco md:text-[10px] my-transition lg:text-[12px] px-2 py1'
                          />
                      ))
                    : null}
            </div>

    );
};
