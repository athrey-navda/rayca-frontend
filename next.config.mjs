/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-rho-swart.vercel.app",
      },
    ],
  },
};

export default nextConfig;
