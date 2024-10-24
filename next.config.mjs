/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "scontent-fra3-1.cdninstagram.com"
        }, {
            protocol: "https",
            hostname: "instagram.fiev14-2.fna.fbcdn.net"
        }]
    }
};

export default nextConfig;
