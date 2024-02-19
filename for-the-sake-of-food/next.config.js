/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pin.it",
      },
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
