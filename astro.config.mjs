import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from 'starlight-image-zoom'
import starlightDocSearch from "@astrojs/starlight-docsearch";

import netlify from "@astrojs/netlify";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://manual.buildwithhussain.com",

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  integrations: [
    starlight({
      plugins: [
        starlightImageZoom(),
        starlightDocSearch({
          appId: "DO73UKKEI5",
          apiKey: "8de771ac869715eb4a3edde28aecd264",
          indexName: "tmfm",
          insights: true,
        }),
      ],
      pagefind: false,
      title: "The Missing Frappe Manual",
      logo: {
        light: "./src/assets/logo-light.webp",
        dark: "./src/assets/logo-dark.webp",
        replacesTitle: true,
      },
      components: {
        "Head": "./src/components/starlight/Head.astro"
      },
      customCss: [
        './src/styles/global.css'
      ],
      editLink: {
        baseUrl:
          "https://github.com/NagariaHussain/the-missing-frappe-manual/edit/main/",
      },
      social: [
        {icon: "discord", label: "Discord", href: "https://discord.gg/SZrgj2RjuY"},
        {icon: "youtube", label: "YouTube", href: "https://youtube.com/@buildwithhussain"},
        {icon: "github", label: "GitHub", href: "https://github.com/NagariaHussain"},
        {icon: "x.com", label: "X.com", href: "https://x.com/NagariaHussain"},
      ],
      sidebar: [
        {
          label: "Getting Started",
          link: "/introduction",
        },
        {
          label: "Installation",
          items: [
            {
              label: "Codespaces",
              link: "/installation/codespaces",
            },
            {
              label: "Frappe Manager",
              link: "/installation/fm",
            },
          ],
        },
        {
          label: "Training & Assessments",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              link: "/handouts/introduction",
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
          label: "Cookbook",
          badge: {
            variant: "success",
            text: "New",
          },
          items: [
            {
              label: "Server Script",
              autogenerate: {
                directory: "/cookbook/server-script",
              },
              collapsed: true,
            },
            {
              label: "Client Script",
              autogenerate: {
                directory: "/cookbook/client-script",
              },
              collapsed: true,
            },
            {
              label: "Report",
              items: [
                {
                  label: "Script Report",
                  autogenerate: {
                    directory: "/cookbook/report/script-report",
                  },
                }
              ],
              collapsed: true,
            },
          ],
        },
        {
          label: "Guides", 
          items: [
            {
              label: "Login with Frappe",
              link: "/guides/login-with-frappe"
            }
          ]
        },
        {
          label: "Cheat Sheets",
          items: [
            {
              label: "Server Script Python API",
              link: "/cheatsheets/script-python-api",
              badge: {
                variant: "tip",
                text: "Cool",
              },
            },
            {
              label: "Bench",
              link: "/cheatsheets/bench",
            },
          ],
        },
      ],
    }),
  ],

  output: "server",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});