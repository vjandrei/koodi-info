<template>
  <div>
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <section class="markdown container mx-auto px-4 py-3">
      <div class="w-3/4 mx-auto">
        <h1 class="text-4xl font-bold my-4" v-html="$page.posts.entry.pageTitle" />
        <div v-html="$page.posts.entry.pageSummaryContent.content" />
        <div class="markdown" v-html="compiledMarkdown"></div>
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import SiteHeader from '~/components/SiteHeader.vue'

export default {
   components: {
    SiteHeader,
  },
  computed: {
    compiledMarkdown: function () {
      marked.setOptions({
        highlight: (code, lang) => {
          return require('highlight.js').highlightAuto(code).value;
        }
      })
      return marked(this.$page.posts.entry.pageContent)
    }
  }
};
</script>

<page-query>
query Craft ($id: [Int]){
  posts: craft {
  entry (id: $id) {
    ... on craft_KoodiInfo{
        id
        uri
        slug
        title
      	pageSummaryContent{
          content
        }
         pageContent
      }
    }
  }
}

query Seo($id: [Int]) {
  posts: craft {
    entry(id: $id) {
      ... on craft_KoodiInfo {
        id
        title
        pageSeoContent {
          title
          description
          keywords {
            keyword
            rating
          }
          social {
            twitter {
              title
              description
              image {
                id
                url
              }
            }
            facebook {
              title
              description
              image {
                id
                url
              }
            }
          }
        }
      }
    }
  }
}
</page-query>