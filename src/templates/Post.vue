<template>
  <div>
    <div class="px-8 bg-white">
      <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200" />
    </div>
    <section class="container mx-auto">
      <div class="w-full sm:w-auto p-8 xl:px-56 xl:py-16 mx-auto border-b border-gray-200 bg-white">
        <div class="text-center sm:mt-16 xl:mt-8">
          <span class="text-xs font-bold uppercase text-teal-700 mb-2 block">{{$page.post.subject}}</span>
          <h1
            class="sm:text-4xl text-2xl font-bold leading-tight mt-0 mb-4 font-serif font-black"
            v-html="$page.post.title"
          />
        </div>
        <div
          class="flex sm:w-3/4 w-full mx-auto flex-row justify-center items-center text-center my-6 sm:text-base text-xs"
        >
          <div class="flex-1 px-2">
            <p v-html="$page.post.author" />
          </div>
          <div class="flex-1 px-2 border-r-2 border-l-2 border-teal-500">
            <time
              :datetime="$page.post.datetime"
              class="text-sm font-semibold"
            >{{ formatPublishDate($page.post.datetime) }}</time>
          </div>
          <div class="flex-1 px-2"></div>
        </div>

        <div
          class="my-6 sm:text-2xl text-lg leading-snug my-12 font-serif text-center"
          v-html="$page.post.description"
        />
        <div class="my-6 w-full mx-auto mb-20">
          <h4
            class="my-6 m:text-1xl text-2xl leading-snug my-12 font-serif text-center"
          >🎧 Kuuntele jakso!</h4>

          <vue-audio :file="podcastAudioFile"></vue-audio>
        </div>

        <div class="markdown" v-html="compiledMarkdown"></div>

        <div v-if="$page.post.video">
          <div class="markdown">
            <h2>Video</h2>
            <iframe
              type="text/html"
              width="100%"
              height="400"
              :src="'https://www.youtube.com/embed/'+ $page.post.video +'?autoplay=0&origin=http://koodi.info'"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div v-if="$page.post.code">
          <div class="markdown">
            <h2>Live koodi</h2>
            <iframe
              width="100%"
              height="700"
              :src="$page.post.code"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div v-if="$page.post.links == 0">
          <div class="markdown">
            <h2>Linkit</h2>
          </div>
          <ul v-for="link in $page.post.links" :key="link.id">
            <li>
              <a v-bind:href="link">{{link}}</a>
            </li>
            <li>
              <a v-bind:href="link">{{link}}</a>
            </li>
            <li>
              <a v-bind:href="link">{{link}}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import SiteHeader from "~/components/SiteHeader.vue";
import VueAudio from "~/components/Audio.vue";

export default {
  data() {
    return {
      podcastAudio: ""
    };
  },
  metaInfo() {
    meta: [
      {
        name: "description",
        content: this.$page.post.description
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: this.$page.post.title
      },
      {
        property: "og:description",
        content: this.$page.post.description.description
      },
      {
        property: "og:url",
        content: "https://koodi.info/" + this.$page.post.slug
      },
      {
        property: "og:image",
        content: this.$page.post.coverimage.url
      },
      { name: "twitter:card", content: "Summary" },
      {
        name: "twitter:title",
        content: this.$page.post.title
      },
      {
        name: "twitter:description",
        content: this.$page.post.description
      },
      { name: "twitter:site", content: "@vj_andrei" },
      { name: "twitter:creator", content: "@vj_andrei" },
      {
        name: "twitter:image",
        content: this.$page.post.coverimage
      }
    ];
  },
  components: {
    SiteHeader,
    "vue-audio": VueAudio
  },
  computed: {
    compiledMarkdown: function() {
      marked.setOptions({
        highlight: (code, lang) => {
          return require("highlight.js").highlightAuto(code).value;
        }
      });
      return marked(this.$page.post.content);
    },
    podcastAudioFile: function() {
      return (this.podcastAudio = this.$page.post.audio);
    },
    formattedPublishDate() {
      return this.$moment(this.$page.post.datetime).format("DD.MM.YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return this.$moment(date).format("DD.MM.YYYY");
    }
  }
};
</script>

<page-query>
query Post ($path: String){
  post (path: $path){
    id
    title
    slug
    description
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    author 
    subject
    content
    audio
    video
    coverimage
    links
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