<template>
  <div class="bg-white">
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <section class=" container mx-auto px-4 py-3">
      <div class="sm:w-4/5 w-full mx-auto">

        <div class="text-center sm:mt-16 mt-8">
          <span class="text-xs font-bold uppercase text-teal-500 mb-2 block">Arkkitehtuuri</span>
          <h1 class="sm:text-5xl text-2xl font-bold leading-tight mt-0 mb-4" v-html="$page.post.entry.title" />
        </div>

        <div class="flex sm:w-2/3 w-full mx-auto flex-row justify-center items-center text-center my-6 sm:text-base text-xs">
          <div class="flex-1 px-2">
            <p v-html="$page.post.entry.author.name" />
          </div>
          <div class="flex-1 px-2 border-r-2 border-l-2  border-teal-500">
            <time>{{ postDate | moment("MM/YYYY") }}</time>
          </div>
          <div class="flex-1 px-2">Avainsana</div>
        </div>

        <div class="my-6 w-full mx-auto">
          <vue-audio :file="file"></vue-audio>
        </div>    

        <div class="my-6 sm:text-2xl text-lg leading-snug" v-html="$page.post.entry.pageSummaryContent.content" />
        <div class="markdown" v-html="compiledMarkdown"></div>

        <div v-if="$page.post.entry.postCodeLearn">
            <div class="markdown">
              <h2>Live koodi</h2>
              <iframe width="100%" height="700" :src="$page.post.entry.postCodeLearn" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div v-else></div>


        <div v-if="$page.post.entry.postLinkList">
          <div class="markdown">
            <h2>Linkkit</h2>
          </div>
          <ul v-for="link in $page.post.entry.postLinkList" :key="link.id">
            <li>
              <a v-bind:href="link.code">{{link.code}}</a>
            </li>
            <li>
               <a v-bind:href="link.design">{{link.design}}</a>
            </li>
            <li>
               <a v-bind:href="link.wow">{{link.wow}}</a>
            </li>
          </ul>
        </div>
        

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
      postDate: ''
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
    this.postDate = Number(this.$page.post.entry.postDate)
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
        author{
          name
        }
        slug
        title
        postDate
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
        postCodeLearn
        postLinkList{
          ... on craft_PostLinkListPostLinks{
            __typename
            design
            code
            wow
          }
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