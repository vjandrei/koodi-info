<template>
  <article
    itemscope="itemscope"
    itemtype="http://schema.org/CreativeWork"
    class="my-2 mx-2 bg-white py-2 px-4 sm:py-6 sm:px-6"
  >
    <g-link :to="`${post.slug}/`" class="flex items-center">
      <div class="max-w-md">
        <h5
          class="text-xs font-bold tracking-widest uppercase mb-2 text-teal-700"
        >{{ post.subject }}</h5>
        <h3
          itemprop="name"
          class="text-1xl md:text-xl font-semibold font-serif text-brand-dark leading-tight"
        >{{ post.title }}</h3>
        <div class="flex items-center my-2">
          <time :datetime="post.datetime" class="text-sm font-normal text-gray-600">
            {{
            formatPublishDate(post.datetime)
            }}
          </time>
        </div>
        <div class="hidden sm:block text-sm text-gray-800 mt-2" v-html="excerpt(post, 150, ' ...')"></div>
      </div>
    </g-link>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return this.$moment(this.post.datetime).format("DD.MM.YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return this.$moment(date).format("DD.MM.YYYY");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.description
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    }
  }
};
</script>
