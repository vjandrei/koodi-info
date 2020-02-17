// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "~/assets/css/main.css"

export default function (Vue, { router, head, isClient }) {
  // Add a html attributes
  head.htmlAttrs = { lang: 'fi' }
  head.bodyAttrs = { class: 'bg-white text-gray-900 leading-normal antialiased font-sans bg-gray-100' }
  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript,Koodari,Koodausta,Ohjeilmointi,Käyttöliittymäsuunnittelua'
  })
  // Add a Google fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Merriweather:400,900&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(require('vue-moment'))

}
