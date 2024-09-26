/** @type {import('next').NextConfig} */
const nextConfig = {
    // Desabilita a pré-renderização automática durante o desenvolvimento
    devIndicators: {
        autoPrerender: false,
    },

    // Configurações de otimização e Webpack
    webpack: (config, { dev, isServer }) => {
        // Aplicar somente no ambiente de desenvolvimento e no cliente
        if (dev && !isServer) {
            // Polling para checar mudanças a cada 1000ms (1 segundo)
            config.watchOptions = {
                poll: 1000, // Checagem de mudanças a cada segundo
                aggregateTimeout: 300, // Atraso antes de recompilar (em milissegundos)
            };

            // Ajuste nas configurações de otimização de chunks
            if (
                config.optimization &&
                config.optimization.splitChunks &&
                config.optimization.splitChunks.cacheGroups
            ) {
                config.optimization.splitChunks.cacheGroups.vendor = {
                    name: "app-vendor", // Nome mais descritivo para o chunk compartilhado
                    test: /node_modules/, // Testa se é código de node_modules
                    chunks: "all", // Aplica a otimização para todos os chunks
                    enforce: true, // Força a divisão dos chunks
                };
            }
        }

        return config;
    },
};

export default nextConfig;
