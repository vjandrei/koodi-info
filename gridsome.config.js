// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: "Koodi.info",
  siteDescription: "Koodi.info on podcastia suomeksi ohjelmistoalasta",
  titleTemplate: `%s | Koodi.info`,
  icon: "src/favicon.png",
  siteUrl: "https://koodi.info",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [],
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PageSeo",
        path: "./content/seo/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Podcast",
        path: "./content/podcasts/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Notes",
        path: "./content/notes/**/*.md",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-16541249-5",
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Ohjelmointia ja ohjelmistokehitystä suomeksi - Koodi.info",
          feed_url: "https://koodi.info/feed.xml",
          site_url: "https://koodi.info/",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: "https://koodi.info/" + node.slug,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "feed.xml",
        },
      },
    },
  ],
  transformers: {
    remark: {},
  },
  templates: {
    Post: "/:slug",
  },
  chainWebpack: (config) => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap((options) => {
        options.plugins.unshift(
          ...[require("postcss-import"), require("postcss-nested")]
        );

        if (process.env.NODE_ENV === "production") {
          options.plugins.push(
            ...[
              require("@fullhuman/postcss-purgecss")({
                content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ["css", "vue", "js"],
                  },
                ],
              }),
            ]
          );
        }
        return options;
      });
  },
};
