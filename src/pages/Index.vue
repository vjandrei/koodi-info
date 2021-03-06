<template>
  <Layout>
    <div class="relative flex flex-col lg:flex-row lg:min-h-screen">
      <div
        class="lg:w-3/5 static w-full lg:fixed lg:min-h-screen lg:min-w-3xl lg:flex lg:items-center lg:justify-center xl:py-20 lg:pl-8 lg:pr-8 bg-no-repeat bg-brand-dark"
      >
        <div class="px-6 py-6 max-w-2xl">
          <div class="mt-2 lg:mt-8">
            <p
              class="text-sm font-semibold text-brand-grey-light uppercase tracking-wider"
            >Tervetuloa</p>
            <h1
              class="mt-2 sm:text-4xl text-1xl leading-snug tracking-wide font-semibold font-sans text-brand-grey-light font-serif"
            >Koodi.info on podcastia suomeksi ohjelmistoalasta.</h1>
            <p
              class="my-6 text-sm sm:text-1xl max-w-xl leading-snug lg:max-w-3xl text-brand-grey-light lg:text-xl"
            >
              Aiheina mm. webbi teknologiat, käyttöliittymäsuunnittelu,
              arkkitehtuurit, muut ohjelmisto teknologiat sekä avointa
              keskustelua ohjelmistoalasta.
            </p>
          </div>

          <div class="mt-4 hidden sm:block">
            <p
              class="text-base lg:text-lg font-medium text-brand-grey-light"
            >Kerro mistä haluaisit tietää enemmän?</p>
            <form
              name="proposal"
              method="post"
              v-on:submit.prevent="handleSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div class="flex flex-wrap my-4">
                <div class="w-full sm:w-5/6 mb-3">
                  <input
                    v-model="formData.proposal"
                    class="bg-gray-100 appearance-none border-2 border-gray-200 rounded sm:rounded-tr-none sm:rounded-br-none w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type="text"
                    name="proposal"
                    placeholder="Esim. Node.js, Vue, Design system"
                  />
                </div>
                <div class="w-full sm:w-1/6">
                  <button
                    class="bg-teal-500 appearance-none border-2 border-teal-500 rounded sm:rounded-tl-none sm:rounded-bl-none w-full py-4 px-4 text-black font-bold leading-tight focus:outline-none focus:bg-teal-200 focus:border-teal-200 hover:bg-teal-200"
                    type="submit"
                  >{{ this.submitText }}</button>
                </div>
              </div>
            </form>
          </div>

          <div class="my-2">
            <p
              class="text-sm font-semibold text-brand-grey-light uppercase tracking-wider"
            >🎤 Isäntänä toimii</p>
            <div class="mt-4 flex flex-col">
              <a href="https://twitter.com/vj_andrei" class="flex items-center no-underline"></a>
              <div class="flex no-underline items-middle">
                <div class="flex-shrink-0">
                  <g-image
                    class="h-12 w-12 rounded-full border-2 border-brand-grey-light"
                    src="~/assets/andreas.jpg"
                    width="500"
                  />
                </div>
                <div class="flex flex-col ml-4">
                  <div class>
                    <p class="font-semibold text-brand-grey-light leading-tight">Andreas Koutsoukos</p>
                    <p class="text-sm text-brand-grey-dark leading-tight">Käyttöliittymä-nörtti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 lg:absolute static w-full right-0 bg-brand-grey-light">
        <div class="relative" style="min-height: calc(100vh - 176px);">
          <div class="sticky top-0 border-b border-gray-200 bg-white sm:px-4 py-2 shadow-md">
            <SiteHeader />
          </div>
          <div class="my-4 px-4">
            <ul class="flex">
              <li
                v-for="tab in tabs"
                :key="tab.id"
                :class="[
                  '',
                  currentTab.name === tab.name
                    ? 'bg-teal-500 hover:bg-teal-700 hover:text-white'
                    : ''
                ]"
                class="flex-auto sm:flex-1 mx-1 text-xs text-center sm:text-base block border border-gray-300 rounded py-2 px-2 sm:px-4 font-semibold cursor-pointer hover:bg-teal-700 hover:text-white"
                v-on:click="currentTab = tab"
              >{{ tab.name }}</li>
            </ul>
          </div>
          <component :is="currentTabComponent.component"></component>
        </div>
        <div class="lg:sticky bottom-0 bg-white px-4 py-6 border-t border-gray-200">
          <PodcastAd v-for="edge in $page.podcasts.edges" :key="edge.node.id" :podcast="edge.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";
import TabPosts from "~/components/TabPosts.vue";
import TabNotes from "~/components/TabNotes.vue";
import PodcastAd from "~/components/PodcastAd.vue";
import { random } from "lodash";
export default {
  data() {
    return {
      formData: {},
      notificationData: [],
      feedUrl: "https://audioboom.com/channels/5016335.rss",
      name: "",
      limit: 1,
      currentTab: {
        name: "Julkaisut",
        component: TabPosts
      },
      tabs: [
        {
          name: "Julkaisut",
          component: TabPosts
        },
        {
          name: "Muistiinpanot",
          component: TabNotes
        }
      ]
    };
  },
  components: {
    TabPosts,
    TabNotes,
    SiteHeader,
    PodcastAd
  },
  metaInfo() {
    return {
      title: this.$static.allPageSeo.title
    };
  },
  props: {
    submitText: {
      type: String,
      required: false,
      default: "Ehdota"
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => {
          this.formData = "";
          this.submitText = "Kiitos 👍🏻";
        })
        .catch(error => alert(error));
    }
  }
};
</script>

<page-query> 
query Home ($page: Int){
  posts: allPost(page: $page, sortBy:"date" ){
    edges{
      node{
        id
        title
        slug
        description
        datetime: date (format: "YYYY-MM-DD HH:mm:ss")
        author 
        subject
        audio
        video
        coverimage
        links
      }
    }
  },
   notes: allNotes(page: $page){
    edges{
      node{
        id
        name
        content
      }
    }
  }
  podcasts: allPodcast(filter: { id: { in: ["2"] }}){
    edges {
      node {
        title
        cover
        about
        rss
      }
    }
  }
}
</page-query>

<static-query>
query {
  allPageSeo  {
    edges{
      node{
        id
        title
        keywords
        cover
        content
      }
    }
  }
}
</static-query>
