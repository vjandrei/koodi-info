<template>
  <div>
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

