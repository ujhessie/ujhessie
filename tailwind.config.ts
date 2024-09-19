import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            colors: {
                // Cores Principais
                "roxo-vibrante": "#D43FC5",
                "laranja": "#FE4D58",
                "violeta-claro": "#B264F3",
                "rosa-intenso": "#F44972",

                // Cores de Fundo
                "preto-escuro": "#050610",
                "azul-escuro": "#1D1F34",
                "preto-claro": "#161724",
                "branco": "#FFFFFF",
                "preto": "#000000",

                // Cores de borda
                "azul-petrolio-escuro": "#444872",
                "azul-escuro-fosco": "#2A2D4A",

                // Cores de texto
                "azul-acinzentado": "#AEB2D7",

            },
            fontFamily: {
                'titulo': ['Bebas Neue', 'sans-serif'],  // Fonte para títulos
                'corpo': ['Roboto', 'sans-serif'],        // Fonte para o corpo do texto
                'monoespaco': ['JetBrains Mono', 'monospace'], // Outra opção de fonte
            },
            // Adicionando gradientes personalizados
            backgroundImage: {
                'gradient-principal': 'linear-gradient(90deg, #F44972, #FE4D58, #D43FC5, #B264F3)',

            },
        },
    },
    plugins: [],
};

export default config;
