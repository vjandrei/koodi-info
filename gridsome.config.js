// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Digikokki Andreas',
  siteDescription: "Suunnittelijasta koodariksi Suomeksi! Tämä on minun eli Andreasksen henkilökohtainen sivu joka sisältää Suomeksi koodi ja käyttöliittymä asioita erillaisissa formaateissa.",
  titleTemplate: `%s | Digikokki`,
  icon: 'src/favicon.png',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'BlogPost',
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
      }
    }
  ]
  
}
