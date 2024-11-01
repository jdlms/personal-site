import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), icon()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});