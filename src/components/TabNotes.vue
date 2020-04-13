<template>
  <div class="m-4">
    <ul>
      <li v-for="note in $page.notes.edges" :key="note.node.id">
        <p class="text-1xl md:text-xl font-semibold font-serif text-brand-dark leading-tight">
          <span v-html="note.node.name"></span>
        </p>
      </li>
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
