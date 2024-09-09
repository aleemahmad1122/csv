/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export', 
    images: {
        unoptimized:true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
                port: '',
                pathname: '**',
            },
        ]
    }
};

export default nextConfig;
