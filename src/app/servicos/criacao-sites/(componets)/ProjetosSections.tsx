import { Botao } from "@/components/ui/Botao/Botao";
import CardProject from "@/components/ui/CardProject/CardProject";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { projetos } from "@/data/projetos";
import { IoIosArrowForward } from "react-icons/io";

export const ProjetosSections = () => {
    const projetosVisiveis = projetos.slice(0, 6);
    return (
        <div>
            <MaxWidthContainer className='mb-8'>
                <div id='div-projetos' className='projetos w-full h-full gap-4'>
                    {projetosVisiveis.map((projeto) => (
                        <CardProject key={projeto.id} id={projeto.id} />
                    ))}
                </div>

                <Botao
                    icon={<IoIosArrowForward />}
                    rota='/projetos'
                    className='md:hidden reveal mb-4'
                >
                    Ver mais projetos
                </Botao>
            </MaxWidthContainer>
        </div>
    );
};
