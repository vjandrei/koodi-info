<template>
  <Layout>
    <main>
      <PostItem :post="$page.post" />
      <div class="markdown" v-html="$page.post.content" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js';
import PostItem from '@/components/PostItem';
export default {
  components: {
    PostItem,
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? '- ' + this.$page.post.tag.name : ''
      }`,
    };
  },
  mounted() {},
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`;
    },
    description(post, length, clamp) {
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
  computed: {
    config() {
      return config;
    },
    avatar() {
      return `/images/authors/${this.$page.post.author.id}.png`;
    },
    postIsOlderThanOneYear() {
      let postDate = this.$moment(this.$page.post.datetime);
      return this.$moment().diff(postDate, 'years') > 0 ? true : false;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.path;
      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`;
    },
    ogImageUrl() {
      return (
        this.$page.post.cover || `${this.config.siteUrl}/images/bleda-card.png`
      );
    },
  },
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    path
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    cover
    author {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>
