<template>
  <Layout>

    <h1>Hello, world!</h1>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{edge.node.title}}
    </div>


  </Layout>
</template>

<page-query> 

query HomePage{
  posts: allPost{
    edges{
      node {
        id
        title
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
