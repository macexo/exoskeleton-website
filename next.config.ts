import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats. Source files stay as-is; Next re-encodes per request.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The three /recruiting/<subteam> pages duplicated /design/<subteam>
    // verbatim. They were consolidated, so keep the old URLs working.
    return [
      { source: "/recruiting/electrical", destination: "/design/electrical", permanent: true },
      { source: "/recruiting/mechanical", destination: "/design/mechanical", permanent: true },
      { source: "/recruiting/software", destination: "/design/software", permanent: true },
      { source: "/recruiting/business", destination: "/recruiting", permanent: true },
      { source: "/ace", destination: "/ace2026", permanent: true },
    ];
  },
};

export default nextConfig;
