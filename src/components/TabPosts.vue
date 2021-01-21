<template>
  <div>
    <div class="mt-2 text-black px-6 flex items-center">
      <p class="text-sm font-semibold not-sr-onlyleading-tight mr-2">Tilaa Koodi.info:</p>
      <a class="text-sm leading-tight" href="https://koodi.info/feed.xml">RSS syöte</a>
      <a class="text-sm leading-tight ml-3" href="https://anchor.fm/koodiinfo">Podcast palvelut</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
      <div
        class="bg-white"
        :class="[
        '',
        i === 0
          ? 'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2'
          : 'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2'
      ]"
        v-for="(edge, i) in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
        <Card :post="edge.node" />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "~/components/Card.vue";
export default {
  name: "TabPosts",
  data() {
    return {};
  },
  components: {
    Card
  }
};
</script>

<style lang="scss"></style>
