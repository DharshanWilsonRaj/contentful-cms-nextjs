/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Use HTTPS for secure connections
                hostname: 'images.ctfassets.net', // Contentful's image domain
                port: '', // Leave empty if not using a specific port
                pathname: '/**', // Allow all paths under this hostname
            },
        ],
    },
};

export default nextConfig;
