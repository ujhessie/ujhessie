import {Header} from "../ui/Header/Header";
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function HeroSection() {
    return (
        <MaxWidthContainer>
            <section>
                <Header />
                {/* <div className='flex flex-col py-8 justify-center'>
          <h1 >
            Bem vindo ao meu portfólio
          </h1>
          <p className='opacity-80 m-auto text-center'>
            Aqui estão alguns dos meus projetos e trabalhos. Qualquer dúvida é só perguntar.
          </p>
        </div> */}
            </section>
        </MaxWidthContainer>
    );
}
