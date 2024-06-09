import Header from "../ui/Header";
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function HeroSection() {
  return (
    <MaxWidthContainer>
      <section>
        <Header />
        <div className='flex flex-col py-40 justify-center'>
          <h1 className='text-7xl font-extrabold text-center mb-8'>Olá, Mundo!</h1>
          <p className='w-[70%] m-auto text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aliquam pariatur rerum quae dignissimos nulla? Natus tempore
            asperiores, omnis beatae id cumque veniam, quidem quia aliquam
            nesciunt praesentium modi quasi.
          </p>
        </div>
      </section>
    </MaxWidthContainer>
  );
}
