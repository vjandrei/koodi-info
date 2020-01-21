<template>
  <div class="bg-white">
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <section class=" container mx-auto px-4 py-3">
      <div class="w-4/5 mx-auto">

        <div class="text-center mt-16">
          <span class="text-xs font-bold uppercase text-teal-500 mb-2 block">Arkkitehtuuri</span>
          <h1 class="text-5xl font-bold leading-tight mt-0 mb-4" v-html="$page.post.entry.title" />
        </div>

        <div class="flex w-2/3 mx-auto flex-row justify-center text-center my-6">
          <div class="flex-1 px-2">Andreas Koutsoukos</div>
          <div class="flex-1 px-2 border-r-2 border-l-2  border-teal-500">21.01.2020</div>
          <div class="flex-1 px-2">Avainsana</div>
        </div>

        <div class="my-6 w-full mx-auto">
          <vue-audio :file="file"></vue-audio>
        </div>    

        

        <div v-html="$page.post.entry.pageSummaryContent.content" />
        

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
      file: '',
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
  mounted() {
    const podcastUrl = this.$page.post.entry.pageSoundContent[0].url
    this.file = podcastUrl
  }
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