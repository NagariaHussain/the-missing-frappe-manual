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
      title: "Frappe Framework Training",
      editLink: {
        baseUrl:
          "https://github.com/NagariaHussain/the-missing-frappe-manual/edit/main/",
      },
      social: {
        youtube: "https://youtube.com/@buildwithhussain",
        github: "https://github.com/NagariaHussain",
        twitter: "https://twitter.com/NagariaHussain",
      },
      sidebar: [
        {
          label: "Assignments",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Day 0",
              link: "/handouts/day-0",
            },
            {
              label: "Day 1",
              link: "/handouts/day-1",
            },
            {
              label: "Day 2",
              link: "/handouts/day-2",
            },
            {
              label: "Day 3",
              link: "/handouts/day-3",
            },
            {
              label: "Day 4",
              link: "/handouts/day-4",
            },
            {
              label: "Evaluations",
              link: "/handouts/evaluations",
            },
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
          autogenerate: {
            directory: "no-code",
          },
        },
      ],
    }),
  ],
});
