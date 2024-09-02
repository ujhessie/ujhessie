import Link from "next/link";
import "./botao.css";

interface iBotao {
    className?: string;
    children: React.ReactNode;
    rota?: string;
    tipo?: "padrao" | "transparente";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export const Botao: React.FC<iBotao> = ({
    className,
    children,
    rota = "#",
    tipo = "padrao",
    icon,
    iconPosition = "right"
}) => {
    const isExternal = rota.startsWith("http");
    const classeTipo = () => {
        return tipo === "padrao"
            ? " bg-gradient-to-r from-vermelho to-rosa text-white px-8 py-3 rounded-full fonte-titulo font-bold uppercase inline-flex   itens-center justify-between inline-flex items-center border border-zinc-800"
            : "bg-zinc-950 border border-zinc-800 text-white px-8 py-3 rounded-full fonte-titulo font-bold uppercase  flex itens-center justify-between inline-flex items-center";
    };

    const content = (
        <>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
        </>
    );

    if (isExternal) {
        return (
            <a
                href={rota}
                className={`${className} ${classeTipo()}`}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={rota} className={`${classeTipo()} ${className} `}>
            {content}
        </Link>
    );
};
