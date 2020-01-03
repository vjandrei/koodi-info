<template>
  <div class="relative my-2 bg-white rounded-lg px-6 py-5 shadow-lg">
    <g-link class="text-3xl font-bold leading-loose" :to="`${post.uri}/`">{{ post.title }}</g-link>
    <div class="font-light" v-html="excerpt(post, 100, ' ...')"></div>
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
      let text = post.summaryContent.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
  }
}
</script>

<style>

</style>