<template>
  <div class="relative my-2 bg-white rounded-lg px-6 py-5 shadow-lg">
    <g-link class="text-2xl font-bold leading-tight" :to="`${post.uri}/`">{{ post.postTitle }}</g-link>
    <div class="font-normal text-gray-600 mt-4" v-html="excerpt(post, 150, ' ...')"></div>
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
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.pageSummaryContent.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
  }
}
</script>

<style>

</style>