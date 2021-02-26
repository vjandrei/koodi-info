// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const postcssCustomMedia = require('postcss-custom-media');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const purgecss = require('@fullhuman/postcss-purgecss');
const shiki = require('shiki');
const customTheme = shiki.loadTheme('./static/custom-theme.json');

const postcssPlugins = [
  tailwind(),
  postcssCustomMedia(),
  postcssPresetEnv(),
  postcssNested(),
];

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')));

module.exports = {
  siteName: 'Koodi.info',
  transformers: {
    remark: {
      // global remark options
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
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
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'material-theme-default', skipInline: true },
            ],
          ],
        },
      },
    },
  ],
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
