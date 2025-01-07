/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  domains: ["res.cloudinary.com"], // Add Cloudinary domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },                
};

export default nextConfig;
