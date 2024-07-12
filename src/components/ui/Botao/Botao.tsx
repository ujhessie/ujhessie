import Link from "next/link";
import "./botao.css";

interface iBotao {
    className?: string;
    children: React.ReactNode;
    rota?: string;
    tipo?: "padrao" | "transparente";
}

export const Botao: React.FC<iBotao> = ({
    className,
    children,
    rota = "#",
    tipo = "padrao",
}) => {
    const isExternal = rota.startsWith("http");
    const classeTipo = () => {
        return tipo === "padrao"
            ? "bg-gradient-to-r from-vermelho to-rosa text-white px-8 py-3 rounded-md fonte-titulo font-bold uppercase lg:block"
            : "bg-cinza text-white px-8 py-3 rounded-md fonte-titulo font-bold uppercase lg:block";
    };

    if (isExternal) {
        return (
            <a
                href={rota}
                className={`${className} ${classeTipo()}`}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={rota} className={`${className} ${classeTipo()}`}>
            {children}
        </Link>
    );
};
