<template>
  <div>
  <section class="shadow-lg">
    <Nav />
  </section>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <slot/>
  </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Nav
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="~/assets/css/main.css"></style>
<style>
  
</style>
