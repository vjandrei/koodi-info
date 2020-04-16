<template>
  <div>
    <div class="px-8 bg-white">
      <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200" />
    </div>
    <section class="container mx-auto p-4 bg-white my-4">
      <div id="blogHeader" :style="{ backgroundImage: `url(${$page.post.coverimage})` }">
        <div class="flex flex-row items-stretch w-full p-8">
          <div class="justify-center content-center items-center flex flex-col w-2/3 mx-auto">
            <div class="text-center">
              <h3 class="relative text-xs font-bold text-gray-200 uppercase mb-2">
                <span v-html="$page.post.subject" />
              </h3>
              <h1
                class="relative sm:text-4xl text-2xl mb-2 font-bold leading-tight font-serif font-black text-white"
              >
                <span v-html="$page.post.title" />
              </h1>
              <h2 class="relative sm:text-2xl text-lg leading-snug font-serif text-white">
                <span v-html="$page.post.description" />
              </h2>
            </div>
            <div class="flex relative mt-6">
              <div class="flex flex-row content-center justify-center align-middle mr-6">
                <div>
                  <g-image
                    class="h-12 w-12 rounded-full border-2 border-brand-grey-light"
                    src="~/assets/andreas.jpg"
                    width="500"
                  />
                </div>
                <div class="flex flex-col content-center justify-center align-middle ml-2">
                  <p class="text-sm text-brand-grey-dark leading-tight mb-1">Julkaisija</p>
                  <p class="font-semibold text-brand-grey-light leading-tight">Andreas Koutsoukos</p>
                </div>
              </div>
              <div class="flex flex-row content-center justify-center align-middle">
                <div class="flex flex-col content-center justify-center align-middle ml-2">
                  <p class="text-sm text-brand-grey-dark leading-tight mb-1">Julkaistu</p>
                  <p class="font-semibold text-brand-grey-light leading-tight">
                    <time
                      :datetime="$page.post.datetime"
                      class="text-sm font-semibold"
                    >{{ formatPublishDate($page.post.datetime) }}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto p-4 bg-white">
      <div class="blogContainer flex">
        <div class="lg:w-2/3 static w-full">
          <div class="w-4/5 mx-auto">
            <div class="markdown" v-html="compiledMarkdown"></div>
          </div>
        </div>
        <div class="lg:w-1/3 w-full order-first lg:order-last">
          <div class="sticky top-0">
            <div>
              <h4 class="my-4 m:text-1xl text-2xl leading-snug font-serif">Podcast jakso</h4>
              <div class="shadow-md">
                <vue-audio :file="podcastAudioFile"></vue-audio>
              </div>
            </div>
            <div class="my-16 border-gray-200 border-l-2 pl-6">
              <h4 class="my-4 m:text-1xl text-2xl leading-snug font-serif">Saatat myös pitää:</h4>
              <div v-for="edge in $page.allPost.edges" :key="edge.id" class="my-4">
                <g-link :to="`${edge.node.slug}/`">
                  <h3
                    class="text-1xl md:text-md font-semibold font-sans underline hover:text-brand-dark text-brand-mid leading-tight mb-2"
                  >{{edge.node.title}}</h3>
                </g-link>
              </div>
              <g-link
                class="text-xs font-bold uppercase underline text-gray-900"
              >Katso kaikki artikkelit →</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.blogContainer {
  @apply flex flex-col relative;
  @screen lg {
    @apply flex-row;
  }
}
#blogHeader {
  position: relative;
  min-height: 300px;
  @apply flex flex-row bg-cover bg-center;
}

#blogHeader:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  @apply bg-brand-mid;
  opacity: 0.4;
}

#blogHeader svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vw;
  /* set height to pixels if you want angle to change with screen width */
}
</style>

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
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
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
          content: this.$page.post.description
        },
        {
          property: "og:url",
          content: "https://koodi.info/" + this.$page.post.slug
        },
        {
          property: "og:image",
          content: this.$page.post.coverimage
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
      ]
    };
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
query Post ($path: String, $id: ID!){
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

  allPost(filter: { id: { nin: [$id] }}){
      edges {
        node {
          id
          title
          excerpt
          slug
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
