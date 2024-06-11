"use client";

import CardProject from "../ui/CardProject/CardProject";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";

export default function ProjectsSection() {
  const { projetos } = useProjetos();

  return (
    <MaxWidthContainer>
      <section>
        {/* <div className='tags flex justify-center gap-4 text-sm mb-8'>
          <a className='py-2 px-4 inline-block text-[12px] bg-stone-900 border opacity-85 rounded-full'>
            Lojas virtuais
          </a>
          <a className='py-2 px-4 inline-block text-[12px] bg-stone-900 border opacity-85 rounded-full'>Front End</a>
          <a className='py-3 px-6  border opacity-85 rounded-full'>API</a>
          <a className='py-3 px-6  border opacity-85 rounded-full'>
            Landingpages
          </a>
          <a className='py-2 px-4 inline-block text-[12px] bg-stone-900 border opacity-85 rounded-full'>
            Dashboards
          </a>
        </div> */}

        <div className='projetos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-4 mb-16'>
          {projetos.map((projeto) => (
            <CardProject key={projeto.id} id={projeto.id} />
          ))}
        </div>
      </section>
    </MaxWidthContainer>
  );
}
