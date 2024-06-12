/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";

import "./style.css";

interface iCardProjeto {
  id: number;
}

const CardProject: React.FC<iCardProjeto> = ({ id }) => {
  const { projetos } = useProjetos();
  const projeto = projetos.find((project) => project.id === id);

  return (
    <Link
      href={`projetos/${projeto?.id}`}
      className='card-projeto relative cursor-pointer  w-full aspect-[4/3] bg-gray-600 rounded-xl overflow-hidden'
    >
      <img
        src={projeto?.imgCapa}
        className='absolute w-full h-full object-cover my-transition'
        alt=''
      />
      <div className='div-info-product my-transition absolute w-full h-full left-0 top-0 rounded-md  flex flex-col justify-end'>
        <div className='content p-4'>
          <p className='titulo-card-projeto my-transition opacity-80  text-white leading-tight lett  text-sm  font-semibold'>
            {projeto?.titulo}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CardProject;
