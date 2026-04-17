import "@/env.js";
import { env } from "@/env.js";

const config: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: env.NEXT_PUBLIC_IMAGE_PROXY_HOSTNAME || "",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;
