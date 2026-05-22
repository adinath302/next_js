/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to complete successfully even if there are ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ['192.168.34.19'],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: "unload=*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
