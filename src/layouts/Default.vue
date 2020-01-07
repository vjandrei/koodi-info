<template>
  <div>
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <SiteMain>
      <slot/>
    </SiteMain>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteMain from '~/components/SiteMain.vue'
export default {
  components: {
    SiteHeader,
    SiteMain
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