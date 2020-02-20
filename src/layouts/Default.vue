<template>
  <div>
    <main>
      <SiteMain>
        <slot/>
      </SiteMain>
    </main>
  </div>
</template>

<script>
import SiteMain from '~/components/SiteMain.vue'
import SiteFooter from '~/components/SiteFooter.vue'
export default {
  components: {
    SiteMain,
    SiteFooter
  }
}
</script>

