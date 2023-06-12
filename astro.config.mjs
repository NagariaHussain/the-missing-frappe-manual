import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tmfm.buildwithhussain.dev",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  integrations: [
    starlight({
      title: "Missing Frappe Manual",
      editLink: {
        baseUrl:
          "https://github.com/NagariaHussain/the-missing-frappe-manual/edit/main/",
      },
      social: {
        github: "https://github.com/NagariaHussain",
        twitter: "https://twitter.com/NagariaHussain",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            {
              label: "What is Frappe Framework?",
              link: "/introduction/ff-definition",
            },
          ],
        },
        {
          label: "FSchool Handouts",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Day 0", link: "/handouts/day-0" },
            { label: "Day 1", link: "/handouts/day-1" },
            { label: "Day 2", link: "/handouts/day-2" },
            { label: "Day 3", link: "/handouts/day-3" },
          ],
        },
        {
          label: "Comparison",
          items: [
            {
              label: "Frappe Framework vs Django",
              link: "/comparison/ff-vs-django",
            },
          ],
        },

        {
          label: "No Code",
          autogenerate: { directory: "no-code" },
        },
      ],
    }),
  ],
});
