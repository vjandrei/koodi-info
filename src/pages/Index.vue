<template>
  <Layout>
    <main> 
      <section class="bg-gray-900">
        <div class="flex container mx-auto px-4 py-3">
          <div class="w-2/3 my-6">
            <h1 class="text-5xl font-black tracking-normal text-gray-100 mb-2">Haluat siis oppia jotakin?</h1>
            <h3 class="text-lg tracking-wider leading-normal text-white mb-2">Olet tullut oikeaan paikkaan. Koodi.info tavoitteena on opastaa ytimekkäästi web ohjelmistokehitykseen liittyviin asioihin, kuten esim. PWA sovellukset, Javascript ohjelmointi sekä käyttöliittymäsuunnittelu.</h3>
            <p class="text-l tracking-wider leading-normal text-gray-200 mt-12">Ehdota aihetta josta tarvitse lisää tietoa</p>
            <div class="flex my-4">
              <div class="w-5/6">
                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded-l-lg  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="text" placeholder="Kerro mistä haluat tietää enenmmän">
              </div>
              <div class="w-1/6">
                <input class="bg-teal-500 appearance-none border-2 border-teal-500 rounded-r-lg  w-full py-4 px-4 text-gray-900 font-bold leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="button" value="Ehdota">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto px-4 py-3">
          <div class="py-6 flex flex-wrap -mx-2">
            <div v-for="(item, i) in $page.posts.entries" :key="item.id" :post="item" class="w-full sm:w-1/1 md:w-1/3 px-2" :class="{'': i > 0 }">
              <Card :post="item" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query> 
query Craft ($slug: String){
  posts: craft {
  entries  (slug: $slug) {
    ... on craft_KoodiInfo{
        uri
        slug
        title
      	summaryContent{
          content
        }
      }
    }
  }
}
</page-query>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
