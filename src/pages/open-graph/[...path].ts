import { OGImageRoute } from "astro-og-canvas";

import { allPages } from "../../content.config";

type OGImageOptions = Awaited<
  ReturnType<Parameters<typeof OGImageRoute>[0]["getImageOptions"]>
>;

const paths = process.env.SKIP_OG ? [] : allPages;

const pages = Object.fromEntries(
  paths.map(({ id, slug, data }) => [id, { data, slug }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "path",

  pages,

  getImageOptions: async (
    _,
    { data, slug }: (typeof pages)[string]
  ): Promise<OGImageOptions> => {
    return {
      title: data.title,
      description: data.description,
      logo: {
        path: "./src/pages/open-graph/_images/logo-dark.webp",
        size: [300],
      },
      border: { width: 32, side: "inline-start" },
      padding: 80,
      bgImage: {
        path: "./src/pages/open-graph/_images/background.png",
      },
    };
  },
});
