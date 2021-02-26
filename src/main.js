// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/assets/css/main.css');
import moment from 'moment';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add a html attributes
  head.htmlAttrs = { lang: 'fi' };
  head.bodyAttrs = {
    class:
      'bg-white text-gray-900 leading-normal antialiased font-sans bg-brand-grey-light',
  };

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content:
      'HTML,CSS,XML,JavaScript,Koodari,Koodausta,Ohjeilmointi,Käyttöliittymäsuunnittelua',
  });

  // Add a Google fonts
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swa',
  });

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css?family=Merriweather:300,900&display=swap',
  });

  Vue.prototype.$moment = moment;
}
