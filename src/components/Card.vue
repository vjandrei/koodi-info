<template>
<div class="w-full lg:max-w-full lg:flex my-2 font-sans">
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <g-link :to="`${post.slug}/`">
      <div class="text-gray-900 font-bold text-xl mb-2">
        {{ post.title }}
      </div>
      <p class="text-gray-700 text-base">{{post.summaryContent.content}}</p>
      </g-link>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
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