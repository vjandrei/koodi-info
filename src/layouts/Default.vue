<template>
  <main class="container max-w-screen-md mx-auto px-6">
    <SiteTopbar />
    <slot />
    <SiteFooter />
  </main>
</template>

<script>
import SiteTopbar from "~/components/SiteTopbar.vue";
import SiteFooter from "~/components/SiteFooter.vue";
export default {
  components: {
    SiteTopbar,
    SiteFooter,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="postcss" scoped>
.header {
  @apply flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

@screen sm {
  .header {
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
