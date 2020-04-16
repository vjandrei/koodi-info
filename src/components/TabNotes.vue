<template>
  <div class="m-4">
    Tulossa
    <ul>
      <li v-for="note in $page.notes.edges" :key="note.node.id"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TabNotes",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="scss"></style>
