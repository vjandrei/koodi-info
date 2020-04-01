<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4"
  >
    <div
      class="bg-white"
      :class="[
        '',
        i === 0
          ? 'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2'
          : 'col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1'
      ]"
      v-for="(edge, i) in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    >
      <Card :post="edge.node" />
    </div>
  </div>
</template>
<script>
import Card from "~/components/Card.vue";
export default {
  name: "TabPodcasts",
  data() {
    return {};
  },
  components: {
    Card
  }
};
</script>

<style lang="scss"></style>
