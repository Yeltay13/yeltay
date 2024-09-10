import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://yeltay.com",
  integrations: [tailwind(), icon()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            return `assets/${assetInfo.name}`;
          },
        },
      },
    },
  },
});
