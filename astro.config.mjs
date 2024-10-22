import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
  // adapter: cloudflare({
  //   mode: "directory",
  //   functionPerRoute: false,
  //   routes: {
  //     include: ["/wave", "/getWaves"],
  //   },
  // }),

  adapter: cloudflare({
    imageService: "cloudflare",
    platformProxy: {
      enabled: true,
    },
  }),
  output: "server",
});
