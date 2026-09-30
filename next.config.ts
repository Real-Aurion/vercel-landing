import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // Old WordPress URLs on aurion.technology, so existing links and search results keep working after the switch.
  async redirects() {
    return [
      { source: "/team", destination: "/vi/about#values", permanent: true },
      { source: "/hello-world", destination: "/vi", permanent: true },
    ];
  },
};


export default nextConfig;
