<template>
  <div>
    <SiteHeader class="xl:flex-shrink-0 border-b border-gray-200"/> 
    <main>
      <SiteMain>
        <slot/>
      </SiteMain>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteMain from '~/components/SiteMain.vue'
import SiteFooter from '~/components/SiteFooter.vue'
export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}
</script>

