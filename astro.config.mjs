import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "tmfm.buildwithhussain.dev",
  integrations: [
    starlight({
      title: "The Missing Frappe Manual",
      social: {
        github: "https://github.com/NagariaHussain",
        twitter: "https://twitter.com/NagariaHussain",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
