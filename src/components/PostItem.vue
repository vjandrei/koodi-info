<template>
  <article>
    <header>
      <div class="flex space-x-2 items-center">
        <div class="flex space-x-4 items-center">
          <img
            class="w-8 h-8 rounded-full block"
            src="https://i.pravatar.cc/150?img=65"
            alt=""
            width="384"
            height="512"
          />

          <span class="small-text" v-if="post.author">
            <g-link :to="`${post.author.path}/`" v-if="post.author">{{
              titleCase(post.author.title)
            }}</g-link></span
          >
        </div>
        <span class="separator"></span>
        <div class="small-text">
          <time :datetime="post.datetime">{{
            formatPublishDate(post.datetime)
          }}</time>
        </div>
      </div>
    </header>
    <h1 class="main-heading">
      <g-link :to="`${post.path}/`">{{ post.title }}</g-link>
    </h1>

    <div class="small-text">
      <span v-if="post.tags && post.tags.length > 0">
        Aihepiiri:
        <g-link
          class="ml-2 bg-green-600 text-white py-1 px-4 rounded-3xl"
          :to="`${post.tags[0].path}/`"
          >{{ titleCase(post.tags[0].title) }}</g-link
        ></span
      >
    </div>

    <p class="excerpt" v-html="excerpt(post, 280, ' ...')"></p>
  </article>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return this.$moment(this.post.datetime).format('DD.MM.YYYY');
    },
  },
  methods: {
    formatPublishDate(date) {
      return this.$moment(date).format('DD.MM.YYYY');
    },
    excerpt(post, length, clamp) {
      if (post.description) {
        return post.description;
      }
      length = length || 280;
      clamp = clamp || ' ...';
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, '')
        .replace(/<[^>]+>/gm, '');
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    },
  },
};
</script>

<style lang="postcss" scoped>
article {
  @apply my-16 border-b border-gray-200;
  header {
    @apply my-4;
  }
}
</style>
