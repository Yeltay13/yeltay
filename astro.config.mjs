import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: "/y-boost/", // Set this to your repo name
  integrations: [tailwind(), icon()],
});
