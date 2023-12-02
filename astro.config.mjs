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
      title: "The Missing Frappe Manual",
      logo: {
        light: "./src/assets/logo-light.webp",
        dark: "./src/assets/logo-dark.webp",
        replacesTitle: true,
      },
      head: [
        // Plausible Analytics
        {
          tag: "script",
          attrs: {
            src: "https://frappecloud.com/js/script.js",
            "data-api": "https://frappecloud.com/api/event",
            defer: true,
            "data-domain": "tmfm.buildwithhussain.dev",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl:
          "https://github.com/NagariaHussain/the-missing-frappe-manual/edit/main/",
      },
      social: {
        discord: "https://discord.gg/SZrgj2RjuY",
        youtube: "https://youtube.com/@buildwithhussain",
        github: "https://github.com/NagariaHussain",
        "x.com": "https://x.com/NagariaHussain",
      },
      sidebar: [
        {
          label: "Training & Assessments",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Resources",
              link: "/handouts/resources",
            },
            {
              label: "Recordings",
              link: "/handouts/recordings",
            },
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
        {
          label: "Cookbook",
          autogenerate: {
            directory: "cookbook",
          },
        }
      ],
    }),
  ],
});
