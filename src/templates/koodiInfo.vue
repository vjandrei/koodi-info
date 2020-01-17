<template>
  <div>
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <section class="markdown container mx-auto px-4 py-3">
      <div class="w-3/5 mx-auto">
        <h1 class="text-4xl font-bold my-4" v-html="$page.post.entry.title" />
        <div v-html="$page.post.entry.pageSummaryContent.content" />


        <vue-audio :file="file"></vue-audio>

        <div v-for="podcast in $page.post.entry.pageSoundContent" :key="podcast.id">
          {{podcast.title}}<br/>
          {{podcast.filename}}<br/>
          {{podcast.url}}<br/>
        </div>

        <div class="markdown" v-html="compiledMarkdown"></div>

        {{$page.post.entry.id}}<br/>
        {{$page.post.entry.slug}}<br/>
        {{$page.post.entry.title}}<br/>
        {{$page.post.entry.pageSummaryContent.content}}<br/>
        {{$page.post.entry.pageContent}}<br/>

       
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import SiteHeader from '~/components/SiteHeader.vue'
import VueAudio from '~/components/Audio.vue'

export default {
  data (){
    return {
      file: this.$page.post.entry.id,
    }
  },
  components: {
    SiteHeader,
   'vue-audio': VueAudio
  },
  computed: {
    compiledMarkdown: function () {
      marked.setOptions({
        highlight: (code, lang) => {
          return require('highlight.js').highlightAuto(code).value;
        }
      })
      return marked(this.$page.post.entry.pageContent)
    }
  },
  methods: {
      
  },
};
</script>

<page-query>
query Craft ($id: [Int]){
  post: craft {
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
        pageSoundContent{
          id
          title
          filename
          url
        }
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