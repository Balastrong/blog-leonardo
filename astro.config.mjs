import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://leonardomontini.dev/",
  integrations: [mdx(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
});
