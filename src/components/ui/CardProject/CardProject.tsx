/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";

import "./style.css";
import Tags from "../Tags/Tags";

interface iCardProjeto {
  id: number;
}

const CardProject: React.FC<iCardProjeto> = ({ id }) => {
  const { projetos } = useProjetos();
  const projeto = projetos.find((project) => project.id === id);

  const ImgCapa = () => {
    return (
      <>
        <img
          src={projeto?.imgCapa}
          className='absolute w-full h-full object-cover my-transition'
          alt=''
        />
      </>
    );
  };

  const TagsTecnologias = () => {
    return (
      <>
        <div className='absolute w-full h-full left-0 top-0 p-4 opacity-0 hover:opacity-100'>
          <div className='flex justify-end gap-1'>
            {projeto?.tecnologias
              ? projeto?.tecnologias?.map((tecnologia) => (
                  <Tags key={tecnologia} text={tecnologia} className='text-[10px] ' />
                ))
              : null}
          </div>
        </div>
      </>
    );
  };

  return (
    <Link
      href={`projetos/${projeto?.id}`}
      className='card-projeto relative cursor-pointer  w-full aspect-[4/3] bg-gray-600 rounded-xl overflow-hidden'
    >
      <ImgCapa />
      <div className='div-info-product my-transition absolute w-full h-full left-0 top-0 rounded-md  flex flex-col justify-end'>
        <div className='content p-4'>
          <p className='titulo-card-projeto my-transition opacity-80  text-white leading-tight lett  text-[12px] md:text-[14px] lg:text-[16px] font-semibold'>
            {projeto?.titulo}
          </p>
          <TagsTecnologias />
        </div>
      </div>
    </Link>
  );
};
export default CardProject;
