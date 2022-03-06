/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const domains = {
  images: {
    domains: ["https://images.ctfassets.net"],
  },
};

module.exports = { nextConfig, domains };
