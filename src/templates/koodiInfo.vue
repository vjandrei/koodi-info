<template>
  <div>
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
      <section class="markdown container mx-auto px-4 py-3">
        <div class="w-3/4 mx-auto">
          <h1 class="text-4xl font-bold my-4" v-html="$page.posts.entry.title" />
          <g-image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" width="500" height="500" fit="contain"/>
          <div v-html="$page.posts.entry.summaryContent.content" />
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
      return marked(this.$page.posts.entry.bodyContent, { 
        sanitize: true,
        highlight: function(code) {
          return require('highlight.js').highlightAuto(code).value;
        },
      })
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
      	summaryContent{
          content
        }
         bodyContent
      }
    }
  }
}
</page-query>