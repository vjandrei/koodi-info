<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <SiteHeader />
      <PostItem
        v-for="edge in $page.posts.edges"
        :key="edge.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import PostItem from "@/components/PostItem";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    SiteHeader,
    PostItem,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  async mounted() {},
};
</script>

<page-query>
  query Home ($page: Int){
    posts: allPost (page: $page){
      edges{
        node{
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          tags {
            id
            title
          }
          author {
            id
            title
          }
        }
      }
    }
  }
</page-query>

<style lang="postcss" scoped></style>
