import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.gocycle.ng" },
      { protocol: "https", hostname: "cdn.guardian.ng" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "worldconnect.org.uk" },
    ],
  },
};

export default nextConfig;
