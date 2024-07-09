/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useProjetos } from "@/contexts/ProjetosContexts";
import "./style.css";
import { ImgCapa, Tecnologias, Titulo } from "./components/";

const CardProject: React.FC<{ id: number }> = ({ id }) => {
    const { projetos } = useProjetos();
    const projeto = projetos.find((project) => project.id === id);

    return (
        <Link
            href={`projetos/${projeto?.id}`}
            className=' card-projeto relative block cursor-pointer mb-4  w-full  p-2  border-cinza border-2 rounded-2xl overflow-hidden'
        >
            <div className=' content bg-cinza rounded-xl  p-4 overflow-hidden w-full flex flex-col gap-4'>
                <ImgCapa url={projeto?.imagens?.imgCapa} />
                <Titulo titulo={projeto?.titulo} />
                <Tecnologias tecnologias={projeto?.tecnologias} />
            </div>
        </Link>
    );
};
export default CardProject;
