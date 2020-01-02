<template>
  <div class="relative my-2 bg-white rounded-lg px-4 py-4 shadow-lg">
    <g-link :to="`${post.uri}/`">{{ post.title }}</g-link><br/>
    {{post.uri}}<br/>
    {{post.summaryContent.content}}
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: ['post'],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>