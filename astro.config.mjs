import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
      type: "pages",
      bindings: {
        KV: {
          type: "kv",
        },
      },
    },
  }),
});
