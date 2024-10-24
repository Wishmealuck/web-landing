/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "scontent-fra3-1.cdninstagram.com"
        }]
    }
};

export default nextConfig;
