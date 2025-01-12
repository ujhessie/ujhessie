"use client";


import { Link } from 'react-router-dom';
import "./botao.css";

interface iBotao {
    className?: string;
    classNameContainer?: string;
    children: React.ReactNode;
    rota?: string;
    tipo?: "padrao" | "secundario" | "terciario";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export const Botao: React.FC<iBotao> = ({
    className,
    classNameContainer,
    children,
    rota = "#",
    tipo = "padrao",
    icon,
    iconPosition = "right",
}) => {
    const isExternal = rota.startsWith("http");

    const classContainer = `botao-container my-transition bg-gradient-principal p-1 md:p-1.3 rounded-full inline-flex items-center ${classNameContainer}`;

    const classContent = `botao-content my-transition px-6 py-3 rounded-full text-[18px] font-semibold w-full  ${
        tipo === "secundario" ? "  bg-preto-escuro " : null
    }  ${className}`;

    const content = (
        <>
            {icon && iconPosition === "left" && (
                <span className='mr-2'>{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <span className='ml-2'>{icon}</span>
            )}
        </>
    );

    if (isExternal) {
        return (
            <a
                href={rota}
                className={` ${classContainer}`}
                target='_blank'
                rel='noopener noreferrer'
            >
                <div className={`${classContent} ${className}`}>{content}</div>
            </a>
        );
    }

    return (
        <Link to={rota} className={classContainer}>
            <div className={`${classContent} ${className}`}>{content}</div>
        </Link>
    );
};
