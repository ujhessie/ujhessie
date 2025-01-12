import { Botao } from "../../../../components/Botao/Botao";

export const Informacoes: React.FC<{
    titulo: string;
    descricao?: string;
    linkVisitar?: string;
    linkDeploy?: string;
}> = ({ titulo, descricao = "", linkVisitar, linkDeploy }) => {
    return (
        <div className='content  col-span-4 '>
            <h2 className=''>{titulo}</h2>
            <p className='descricao-projeto text-normal mb-4 '>{descricao}</p>
            <div className='flex flex-row-reverse md:justify-end gap-4 flex-wrap justify-center '>
                {linkVisitar ? (
                    <Botao rota={linkVisitar}>Visitar projeto</Botao>
                ) : null}
                {linkDeploy ? (
                    <Botao rota={linkDeploy} tipo='padrao'>
                        Ver deploy
                    </Botao>
                ) : null}
            </div>
        </div>
    );
};
