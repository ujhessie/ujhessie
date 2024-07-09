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
                branco: "#ffffff", // cor branca corrigida
                preto: {
                    black: "#000000",
                    azulado: "#151821"
                },
                rosa: "#BF36FF",
                vermelho: "#FF4949", // corrigido de 'vermellhor' para 'vermelho'
                amarelo: "#FFB525",
                cinza: "#2C2C2C",
            }
        },
        breakpoints: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
        },
    },
    plugins: [],

};
export default config;
