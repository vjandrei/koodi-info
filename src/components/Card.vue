<template>
  <article itemscope="itemscope" itemtype="http://schema.org/CreativeWork" class="my-4 bg-gray-100 py-8 px-12">
    <g-link :to="`${post.uri}/`" class="flex items-center">
      <div>
        <h5 class="text-xs font-bold tracking-widest uppercase mb-4 text-gray-600">Aihetunnistin</h5>
        <h3 itemprop="name" class="text-2xl font-semibold text-teal-900 leading-tight">
          {{ post.postTitle }}
        </h3>
        <div class="text-sm text-gray-800 mt-4" v-html="excerpt(post, 150, ' ...')"></div>
        <div class="flex text-sm text-gray-800 font-semibold mt-4">
          Jakso numero: 1
        </div>
      </div>
    </g-link>
  </article>
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