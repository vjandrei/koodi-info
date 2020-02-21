<template>
<section class="bg-white">
    <header id="header" class="flex flex-col container mx-auto w-full py-2">
      <div class="flex items-center">
        <div id="brand" class="space-between lg:block hidden xl:py-5 flex justify-between py-3">
            <g-link to="/">
              <g-image src="~/assets/logo-black.svg" width="150"/>
            </g-link>
        </div>
        <nav class="flex items-center w-full sm:items-center">
          <div class="w-3/5 mx-auto block relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            </div>
            <input id="search" v-model="searchTerm" class="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" placeholder="Etsi avainsanalla" type="text">
            <div v-if="searchResults.length" class="absolute shadow-lg w-full bg-white z-50 border border-gray-300 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg py-4 px-8 my-2">
              <g-link v-for="result in searchResults" :key="result.id" :to="result.slug" class="navbar-item cursor-pointer my-2 block">
              {{ result.title }}
              </g-link>
            </div>
          </div>
          <div class="flex items-center">
              <button @click="toggle" type="button" class="px-2 text-gray-800 focus:outline-none focus:text-black flex items-center ">
              <span class="mr-2">Valikko</span>
              <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
              </button>
          </div>
        </nav>
        </div>
        <div :class="{ 'hidden': !isOpen, 'block flex justify-end text-right': isOpen }">
          <div class="pr-10 my-4">
            <ul class="leading-loose">
              <li><g-link to="/about/" class="block">Tietoja tästä sivusta</g-link></li>
            </ul>
          </div>
        </div>
    </header>
</section>
</template>

<static-query>
query Craft{
  posts: craft {
  entries  {
    ... on craft_KoodiInfo{
        id
        slug
        title
      }
    }
  }
}
</static-query>

<script>
import Flexsearch from "flexsearch";
export default {
  name: "SiteHeader",
  data() {
    return {
        isOpen: false,
        index: null,
        searchTerm: ""
    }
  },
  methods: {
    toggle() {
        this.isOpen = !this.isOpen
    }
  },
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "bodyContent"
        ]
      }
    });
    this.index.add(this.$static.posts.entries.map(id => id));
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchTerm.length < 3) return [];
      return this.index.search({
        query: this.searchTerm,
        limit: 10
      });
    }
  }
};
</script>


<style lang="postcss">

</style>