    'use client'
    import React, { createContext, useContext, useState, ReactNode } from "react";
    import { projetos, projeto } from '@/data/projetos';

    // Interface para o contexto de projetos
    interface ProjetosContextProps {
        projetos: projeto[];
    }

    // Criando o contexto com valor inicial
    const ProjetosContext = createContext<ProjetosContextProps>({
        projetos: [],
    });

    // Provedor do contexto de projetos
    export const ProjetosProvider = ({ children }: { children: ReactNode }) => {
        const [projects] = useState<projeto[]>(projetos);

        return (
            <ProjetosContext.Provider value={{ projetos: projects }}>
                {children}
            </ProjetosContext.Provider>
        );
    };

    // Hook personalizado para usar o contexto de projetos
    export const useProjetos = () => useContext(ProjetosContext);
