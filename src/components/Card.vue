<template>
  <article itemscope="itemscope" itemtype="http://schema.org/CreativeWork" class="my-16">
    <g-link :to="`${post.uri}/`" class="flex items-center">
      <div class="flex items-center justify-center flex-none mr-16 rounded-full w-20 h-20 bg-gray-400">
        <svg class="w-4 h-4 text-teal-800" aria-hidden="true" data-prefix="fas" data-icon="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
        </svg>
      </div>
      <div>
        <h3 itemprop="name" class="text-2xl font-semibold leading-snug md:leading-tight">
          {{ post.postTitle }}
        </h3>
        <div class="font-normal text-gray-800 mt-4" v-html="excerpt(post, 150, ' ...')"></div>
        <p class="mt-2 mb-2">
          <span itemprop="publisher">Jakson isäntänä</span> —
          <span itemprop="author">{{post.author.name}}</span>
        </p>
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