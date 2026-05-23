import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "react-datepicker",
    "@floating-ui/react",
    "@floating-ui/react-dom",
    "@floating-ui/dom",
  ],
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
