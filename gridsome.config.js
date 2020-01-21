// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Koodi.info',
  siteDescription: "Sivun kuvaus",
  titleTemplate: `%s | Koodi.info`,
  icon: 'src/favicon.png',
  siteUrl: 'https://youthful-wiles-bb2081.netlify.com/',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
      ]
    }
  },

  plugins: [
    {
      use: 'gridsome-source-craftql',
      options: {
        url: process.env.CRAFT_API_URL,
        token: process.env.AUTH_TOKEN,
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    }
  ],

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extensions: ['css', 'vue', 'js']
                }
              ],
            }),
          ])
        }
        return options
      })
    }
  
}