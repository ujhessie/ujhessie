"use client";

import CardProject from "../ui/CardProject/CardProject";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import { useProjetos } from "@/contexts/ProjetosContexts";

export default function ProjectsSection() {
  const { projetos } = useProjetos();

  return (
    <MaxWidthContainer>
      <section>
        <div className='projetos w-full h-full mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projetos.map((projeto) => (
            <CardProject key={projeto.id} id={projeto.id} />
          ))}
        </div>
      </section>
    </MaxWidthContainer>
  );
}
