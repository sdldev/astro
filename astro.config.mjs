import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.projectnode.my.id/",
  integrations: [mdx(), sitemap(), tailwind(), react(), icon({iconDir: "src/assets/icons",})]
});