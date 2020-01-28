<template>
  <Layout>
    <main> 
      <section class="bg-gray-900 relative">
        <div class="flex container mx-auto px-4 py-3">
          <div class="w-full lg:w-2/3  my-6 z-40">
            <span class="text-xs font-bold uppercase text-teal-500 mb-2 block">{{this.$page.heading.globals.bigHeaderInfo.pageTitle}}</span>
            <h1 class="sm:text-2xl text-1xl font-semibold	tracking-wide leading-tight text-gray-100 mb-2">{{this.$page.heading.globals.bigHeaderInfo.pageContent}}</h1>
            <p class="text-l tracking-wider leading-normal text-gray-200 mt-12">Ehdota aihetta josta tarvitse lisää tietoa</p>
            <div class="flex flex-wrap my-4">
              <div class="w-3/4 lg:w-5/6x">
                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded-l-lg  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="text" placeholder="Kerro mistä haluat tietää enenmmän">
              </div>
              <div class="w-1/4 lg:w-1/6">
                <button class="bg-teal-500 appearance-none border-2 border-teal-500 rounded-r-lg  w-full py-4 px-4 text-gray-900 font-bold leading-tight focus:outline-none focus:bg-teal-200 focus:border-teal-200 hover:bg.teal-200" type="button">Ehdota</button>
              </div>
              <div class="w-full flex-auto mt-2">
                <g-link class="text-sm text-gray-500">Haluatko mukaan kirjoittamaan aiheita?</g-link>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-0 w-full right-0 z-0">
          <g-image class="mx-auto" src="~/assets/bg-sample.svg" fit="contain" />
        </div>
      </section>
      <section>
        <div class="container mx-auto px-4 py-3">
          <div class="py-6 flex flex-wrap -mx-2">
            <div v-for="(item, i) in $page.posts.entries" :key="item.id" :post="item" class="w-full sm:w-1/1 md:w-1/3 px-2 my-4" :class="{'': i > 0 }">
              <Card :post="item" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:description", content: this.$static.metadata.siteDescription },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.$static.metadata.siteDescription },
        { name: "twitter:site", content: "@vj_andrei" },
        { name: "twitter:creator", content: "@vj_andrei" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
}
</script>

<page-query> 
query Craft ($slug: String){
  heading: craft{
    globals{
      bigHeaderInfo{
        pageTitle
        pageContent
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
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>