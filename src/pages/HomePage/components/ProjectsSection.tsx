import { useEffect, useState } from 'react';
import { useProjetos } from '../../../contexts/ProjetosContexts';
import MaxWidthContainer from '../../../components/MaxWidthContainer';
import { SubtituloTop } from '../../../components/Subtitulotop/SubtituloTop';
import { Botao } from '../../../components/Botao/Botao';
import CardProject from '../../../components/CardProject/CardProject';


export const ProjectsSection = () => {
    const { projetos } = useProjetos();
    const [visibleProjects, setVisibleProjects] = useState(6);

    // Update visibleProjects based on screen size
    useEffect(() => {
        const updateVisibleProjects = () => {
            if (window.innerWidth < 640) {
                setVisibleProjects(2);
            } else if (window.innerWidth < 1024) {
                setVisibleProjects(4);
            } else {
                setVisibleProjects(3);
            }
        };

        // Initial check
        updateVisibleProjects();

        // Add event listener to handle window resize
        window.addEventListener("resize", updateVisibleProjects);

        // Cleanup event listener on unmount
        return () =>
            window.removeEventListener("resize", updateVisibleProjects);
    }, []);

    return (
        <section className='py-16 bg-gradient-to-b  from-preto-claro to-transparent'>
            <MaxWidthContainer className=''>
                <div className='header-projetos flex md:justify-between justify-center  items-end mb-4'>
                    <div className='flex flex-col justify-center items-center md:items-start md:justify-start text-center md:tex-start gap-4'>
                        <div className='flex justify-center md:justify-start'>
                            <SubtituloTop>Projetos</SubtituloTop>
                        </div>
                        <h2 className='text-white text-center md:text-start'>
                            Veja alguns dos meus <span>projetos</span>
                        </h2>
                    </div>
                    <div className='text-white hidden md:block '>
                        <Botao
                            tipo='secundario'
                            rota='/projetos'
                            
                        >
                            Ver mais projetos
                        </Botao>
                    </div>
                </div>
                <div
                    id='div-projetos'
                    className='grid md:grid-cols-2 lg:grid-cols-3 w-full h-full mb-4 gap-4'
                >
                    {projetos.slice(0, visibleProjects).map((projeto) => (
                        <CardProject key={projeto.id} id={projeto.id} />
                    ))}
                </div>

                <div className='flex justify-center md:justify-start  md:hidden   text-white  my-4'>
                    <Botao rota='/projetos' className=''>
                        Ver todos os projetos
                    </Botao>
                </div>
            </MaxWidthContainer>
        </section>
    );
};
