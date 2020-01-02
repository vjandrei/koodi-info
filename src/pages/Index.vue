<template>
  <Layout>
    <div class="py-6 flex flex-wrap -mx-2">
      <div v-for="(item, i) in $page.posts.entries" :key="item.id" :post="item" class="w-full sm:w-1/1 md:w-1/3 px-2" :class="{'': i > 0 }">
        <Card :post="item" />
      </div>
    </div>
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
