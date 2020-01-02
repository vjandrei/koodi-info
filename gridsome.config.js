// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Koodi.info',
  siteDescription: "",
  titleTemplate: `%s | Koodi.info`,
  icon: 'src/favicon.png',
  siteUrl: 'https://youthful-wiles-bb2081.netlify.com/',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.CRAFT_API_URL,
        fieldName: 'craft',
        typeName: 'craft',
        headers: {
          Authorization: `bearer ${process.env.AUTH_TOKEN}`,
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-135446199-1',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Bleda, a Gridsome blog starter',
          feed_url: 'https://gridsome-starter-bleda.netlify.com/feed.xml',
          site_url: 'https://gridsome-starter-bleda.netlify.com',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://gridsome-starter-bleda.netlify.com/' + node.slug,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldNest: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
  ],


  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },


}