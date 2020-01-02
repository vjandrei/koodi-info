<template>
  <Layout>
    Index
  </Layout>
</template>

<page-query> 
query Craft ($path: String){
  posts: craft {
  entries  (slug: $path){
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
