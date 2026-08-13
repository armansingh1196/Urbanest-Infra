import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "geolocation=(self)" },
        ],
      },
    ];
  },
  experimental: {
    // @ts-expect-error - Next.js types don't include turbopack root yet
    turbopack: {
      root: "D:\\Urbanest Infra",
    },
  },
};

export default nextConfig;
