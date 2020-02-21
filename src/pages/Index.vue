<template>
  <Layout class="info">
    <div class="relative flex flex-col lg:flex-row lg:min-h-screen overflow-scroll">
      <div class="lg:w-3/5 static w-full lg:fixed lg:min-h-screen lg:min-w-3xl lg:flex lg:items-center lg:justify-center lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat" style="background-color:#062B39;">
        <div class="px-6 pt-16 pb-12 md:max-w-3xl md:mx-auto lg:max-w-full lg:pt-0"> 

          <div class="mt-8 lg:mt-8">
            <p class="text-sm font-semibold text-gray-300 uppercase tracking-wider"> Tervetuloa </p>
            <h1 class="mt-2 sm:text-4xl text-3xl leading-tight tracking-wide font-semibold font-sans text-gray-100"> 
              Koodi.info podcasting-blogin pariin joka yhdistelee <span class="text-teal-400"> tekstiä, audiota ja kuvakaappausta </span> ohjelmistoalan liittyvistä aiheista.  
            </h1>
            <p class="mt-3 text-lg max-w-xl lg:max-w-3xl text-gray-300 xl:text-2xl"> 
              Aiheita mm. webin teknologiat, käyttöliittymäsuunnittelu, arkkitehtuurit, muut ohjelmisto teknologiat sekä avointa keskustelua ohjelmistoalasta.
            </p>
          </div>
          <div class="mt-10">
            <p class="text-base xl:text-lg font-medium text-white"> Kerro mistä haluaisit tietää enemmän? </p>
            <form 
              name="proposal"
              method="post"
              v-on:submit.prevent="handleSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
            <div class="flex flex-wrap my-4">
            <div class="w-full sm:w-5/6 mb-3">
              <input v-model="formData.proposal" class="bg-gray-100 appearance-none border-2 border-gray-200 rounded sm:rounded-tr-none sm:rounded-br-none w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="text" name="proposal" placeholder="Esim. Node.js, Vue, Design system">
            </div>
            <div class="w-full sm:w-1/6">
              <button class="bg-teal-500 appearance-none border-2 border-teal-500 rounded sm:rounded-tl-none sm:rounded-bl-none w-full py-4 px-4 text-black font-bold leading-tight focus:outline-none focus:bg-teal-200 focus:border-teal-200 hover:bg.teal-200" type="submit">{{this.submitText}}</button>
            </div>
            </div>
          </form>
          </div>
          
          <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Isäntänä toimii</p>
          <div class="mt-4 sm:flex"> 
            <a href="https://twitter.com/vj_andrei" class="flex items-center no-underline"> 
              <div class="flex-shrink-0"> 
                <g-image class="h-12 w-12 rounded-full border-2 border-white" src="~/assets/andreas.jpg" width="500"/>
              </div> 
              <div class="ml-3"> 
                <p class="font-semibold text-white leading-tight">Andreas Koutsoukos</p> 
                <p class="text-sm text-gray-400 leading-tight">Käyttöliittymä-nörtti</p> 
              </div> 
            </a> 
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 lg:absolute static w-full right-0 px-8">
      <div class="border-b border-gray-200">
        <SiteHeader />
      </div>
        <div class="w-full" :class="{'': i > 0 }" v-for="(item, i) in $page.posts.entries" :key="item.id" :post="item">
          <Card :post="item" />
          <Card :post="item" />
          <Card :post="item" />
          <Card :post="item" />
        </div>
      </div>
  </div>
  </Layout>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
      formData: {},
      notificationData: []
    }
  },
  components:{
    Card,
    SiteHeader
  },
  metaInfo () {
    return {
      title: this.$page.meta.globals.homePage.pageSeoContent.title,
      meta: [
        { name: 'description', content: this.$page.meta.globals.homePage.pageSeoContent.description },
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.title },
        { property: "og:description", content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.description },
        { property: "og:url", content: "https://koodi.info" },
        { property: "og:image",  content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.image.url },
        { name: "twitter:card", content: "Summary" },
        { name: "twitter:title", content: this.$page.meta.globals.homePage.pageSeoContent.social.twitter.title },
        { name: "twitter:description", content: this.$page.meta.globals.homePage.pageSeoContent.description },
        { name: "twitter:site", content: "@vj_andrei" },
        { name: "twitter:creator", content: "@vj_andrei" },
        { name: "twitter:image", content: this.$page.meta.globals.homePage.pageSeoContent.social.twitter.image.url },
      ],
    }
  },
   props:{
    submitText: {
      type: String,
      required: false,
      default: 'Ehdota'
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => {
        this.formData = ""
        this.submitText = "Kiitos 👍🏻"
      })
      .catch(error => alert(error))
    }
  }
}
</script>


<page-query> 
query Craft ($slug: String){
  meta: craft{
    globals{
       homePage {
        pageTitle
        pageContent
        pageSeoContent {
          title
          description
          social {
            twitter {
              title
              description
              image{
                url
              }
            }
            facebook {
              title
              description
              image{
                url
              }
            }
          }
        }
      }
    }
  }
  posts: craft {
  entries  (slug: $slug) {
    ... on craft_KoodiInfo{
        uri
        slug
        title
        postTitle
        author{
          name
        }
      	pageSummaryContent{
          content
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>