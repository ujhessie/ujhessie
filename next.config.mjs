/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      autoPrerender: false,
    },
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.watchOptions = {
          poll: 1000,          // Checa por mudanças a cada segundo
          aggregateTimeout: 300,  // Espera um pouco mais antes de compilar
        };
  
        // Ajustar as configurações de otimização
        if (config.optimization && config.optimization.splitChunks && config.optimization.splitChunks.cacheGroups) {
          config.optimization.splitChunks.cacheGroups.shared = {
            name: 'app-other',
            test: /node_modules/,
            chunks: 'initial',
            enforce: true,
          };
        }
      }
      return config;
    },
  };
  
  export default nextConfig;
  