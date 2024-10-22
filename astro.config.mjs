import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
  adapter: cloudflare(),
  vite: {
    build: {
      minify: false,
    },
  },
});
