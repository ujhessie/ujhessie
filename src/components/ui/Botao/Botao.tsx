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
    iconPosition = "right",
}) => {
    const isExternal = rota.startsWith("http");

    // const classeTipo = () => {
    //     return tipo === "padrao"
    //         ? " bg-gradient-to-r from-vermelho to-rosa text-white px-8 py-3 rounded-full fonte-titulo font-bold uppercase inline-flex   itens-center justify-between inline-flex items-center border border-zinc-800"
    //         : "bg-zinc-950 border border-zinc-800 text-white px-8 py-3 rounded-full fonte-titulo font-bold uppercase  flex itens-center justify-between inline-flex items-center";
    // };

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
                className={` ${
                    tipo === "padrao"
                        ? "bg-gradient-principal p-2 rounded-full"
                        : ""
                } ${className} `}
                target='_blank'
                rel='noopener noreferrer'
            >
                <div
                    className={`${
                        tipo === "padrao"
                            ? "p-2 bg-preto-escuro rounded-full"
                            : ""
                    }`}
                >
                    {content}
                </div>
            </a>
        );
    }

    return (
        <Link
            href={rota}
            className={`${
                tipo === "padrao"
                    ? "bg-gradient-principal  inline-block p-1 rounded-full"
                    : "bg-gradient-principal  inline-block p-1 rounded-full"
            } ${className} `}
        >
            <div
                className={`${
                    tipo === "padrao"
                        ? "px-8 py-3 bg-gradient-principal rounded-full flex"
                        : "px-8 py-3 bg-preto-escuro rounded-full flex"
                }`}
            >
                {content}
            </div>
        </Link>
    );
};
