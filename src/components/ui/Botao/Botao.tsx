import Link from "next/link";

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
    const classeTipo = () => {
        return tipo == "padrao"
            ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
            : "bg-transparent border-white text-white hover:text-black hover:bg-white";
    };

    return (
        <Link
            href={rota}
            className={`px-8 py-2 inline-block rounded-full border font-bold text-[14px] md:text-[16px] lg:text-[18px] ${classeTipo()} ${className}`}
        >
            {children}
        </Link>
    );
};
