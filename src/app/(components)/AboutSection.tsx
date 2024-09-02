/* eslint-disable @next/next/no-img-element */
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Botao } from "./../../components/ui/Botao/Botao";

export const AboutSection = () => {
    return (
        <MaxWidthContainer className='text-white my-20  '>
            <div className='bg-zinc-950/50 p-8 rounded-lg'>
                <div className='grid md:grid-cols-2 gap-8 '>
                    <div className='aspect-video md:aspect-auto w-full h-full relative rounded-lg overflow-hidden'>
                        <img
                            className='top-0 left-0 w-full h-full object-cover absolute'
                            src='https://img.freepik.com/free-vector/vintage-vaporwave-background_23-2148885069.jpg?t=st=1724679320~exp=1724682920~hmac=304583f169bcea96caa15dd5cb729916f396090f6cb48915e6fd1d358cbcd3f6&w=740'
                            alt=''
                        />
                    </div>
                    <div className='py-10'>
                        <h2>Sobre</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate alias inventore delectus placeat
                            iure nulla voluptas doloribus similique veritatis
                            quibusdam eligendi nostrum ipsa facilis, adipisci
                            rem voluptatibus unde itaque magni.
                        </p>
                        <div className='flex gap-4 my-4'>
                            <Botao className='rounded-full' tipo='transparente'>
                                Ver Projetos
                            </Botao>
                            <Botao className='rounded-full'>
                                Ver mais sobre
                            </Botao>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthContainer>
    );
};
