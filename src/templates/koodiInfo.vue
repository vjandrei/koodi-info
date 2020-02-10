<template>
  <div class="bg-white">
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <section class="container mx-auto px-4 py-3">
      <div class="w-full sm:w-auto md:w-full lg:w-3/5 xl:w-3/5 mx-auto border-b border-gray-200">
        <div class="text-center sm:mt-16 mt-8">
          <span class="text-xs font-bold uppercase text-teal-700 mb-2 block">{{$page.post.entry.postSubjects[0].title}}</span>
          <h1 class="sm:text-4xl text-2xl font-bold leading-tight mt-0 mb-4 font-serif font-black" v-html="$page.post.entry.title" />
        </div>
        <div class="flex sm:w-3/4 w-full mx-auto flex-row justify-center items-center text-center my-6 sm:text-base text-xs">
          <div class="flex-1 px-2">
            <p v-html="$page.post.entry.author.name" />
          </div>
          <div class="flex-1 px-2 border-r-2 border-l-2  border-teal-500">
            <time>{{ postDate | moment("MM/YYYY") }}</time>
          </div>
          <div class="flex-1 px-2">Avainsana</div>
        </div>
      </div>

      <div class="w-full sm:w-auto md:w-full lg:w-3/5 xl:w-3/5 mx-auto">
        <div class="my-6 sm:text-2xl text-lg leading-snug my-12 font-serif text-center" v-html="$page.post.entry.pageSummaryContent.content" />
        <div class="my-6 w-full mx-auto mb-20">
          <div v-for="audio in podcastAudioFile" :key="audio.id">
            <vue-audio :file="audio.url"></vue-audio>
          </div>
        </div>    
        <div class="markdown" v-html="compiledMarkdown"></div>
        <div v-if="$page.post.entry.postCodeLearn">
            <div class="markdown">
              <h2>Live koodi</h2>
              <iframe width="100%" height="700" :src="$page.post.entry.postCodeLearn" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div v-if="$page.post.entry.postLinkList.length">
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
      podcastAudio: '',
      postDate: ''
    }
  },
  metaInfo () {
    return {
      title: this.$page.post.entry.pageSeoContent.title,
      meta: [
        { name: 'description', content: this.$page.post.entry.pageSeoContent.description },
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$page.post.entry.pageSeoContent.social.facebook.title },
        { property: "og:description", content: this.$page.post.entry.pageSeoContent.social.facebook.description },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image",  content: this.$page.post.entry.pageSeoContent.social.facebook.image.url },
        { name: "twitter:card", content: "Summary"  },
        { name: "twitter:title", content: this.$page.post.entry.pageSeoContent.social.twitter.title },
        { name: "twitter:description", content: this.$page.post.entry.pageSeoContent.description },
        { name: "twitter:site", content: "@vj_andrei" },
        { name: "twitter:creator", content: "@vj_andrei" },
        { name: "twitter:image", content: this.$page.post.entry.pageSeoContent.social.twitter.image.url },
      ],
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
    },
    podcastAudioFile: function () {
      return this.podcastAudio = this.$page.post.entry.pageSoundContent
    },
  },
  mounted() {
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
        postSubjects{
          title
        }
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

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>