<template>
  <div>
    <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
      <div
        class="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
      >
        <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
        <ul class="list-reset py-2 md:py-0">
          <li class="py-1 md:my-2 border-l-4 border-transparent font-bold">
            <a
              href="#section1"
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
            >
              <span class="pb-1 md:pb-0 text-sm">CSS</span>
            </a>
          </li>
          <li class="py-1 md:my-2 border-l-4 border-transparent">
            <a
              href="#section2"
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
            >
              <span class="pb-1 md:pb-0 text-sm">Javascript</span>
            </a>
          </li>
          <li class="py-1 md:my-2 border-l-4 border-transparent">
            <a
              href="#section3"
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
            >
              <span class="pb-1 md:pb-0 text-sm">HTML</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <section class="w-full lg:w-4/5">
      <div class="px-1">
        <div class="flex -mx-2 flex-wrap">
          <Card
            class="w-full sm:w-1/1 md:w-1/2 px-2"
            v-for="edge in $page.posts.entries"
            :key="edge.id"
            :post="edge"
          />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="postcss">
</style>