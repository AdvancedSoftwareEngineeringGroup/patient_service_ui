import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve('./components'), // Adjust to match your folder structure
            '@data': path.resolve('./data'),
            '@navigation': path.resolve('./components/navigation'),
            '@themes': path.resolve('./themes'),
            '@hooks': path.resolve('./hooks'),
            '@styles': path.resolve('./app/styles'),
            '@utils': path.resolve('./utils'),
            '@app': path.resolve('./app'),
        };
        return config;
    },
};

export default nextConfig;
