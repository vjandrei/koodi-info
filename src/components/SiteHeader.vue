<template>
<section class="bg-white">
    <header id="header" class="sm:flex sm:items-center sm:justify-between container mx-auto">
        <div id="brand" class="xl:w-72 xl:justify-center xl:py-5">
            <div>
                <g-link to="/"><h3 class="text-3xl font-black uppercase;">Koodi<span class="bg-gray-900 text-white px-1 text-teal-500">.info/></span></h3></g-link>
            </div>
            <div class="flex items-center sm:hidden">
                <button @click="toggle" type="button" class="px-2 text-gray-500 focus:outline-none focus:text-black flex items-center ">
                <span class="mr-2">Valikko</span>
                <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                </button>
            </div>
        </div>
        <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{ 'hidden': !isOpen, 'block': isOpen }">
             <div class="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </div>
                <input id="search" v-model="searchTerm" type="text" class="input block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" placeholder="Etsi avainsanalla">
                {{ searchResults }}
             </div>
             <div class="sm:flex sm:items-center">
                <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
                    <g-link to="/about/" class="block px-3 py-1">Tietoa</g-link>
                    <g-link to="/about/" class="block px-3 py-1">Kysy jotain</g-link>
                    <g-link to="/about/" class="block px-3 py-1">Twitter</g-link>
                </div>
             </div>

        </nav>
    </header>
</section>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
        isOpen: false,
        searchTerm: ''
    };
  },
  methods: {
      toggle() {
        this.isOpen = !this.isOpen
    },
  },
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  }
};
</script>


<style lang="scss">
#brand{
    @apply flex justify-between px-4 py-3;
        h3 {
        @apply text-3xl font-black;
    }
}
</style>