<template>
    <footer class="flex container mx-auto px-4 py-1 justify-center relative">
      <p class="text-center">
        Koodinpätkät MIT, ellei toisin mainita. <br/>
        Sisältö & Kuvat © 2020 Koodi.info
      </p>
    </footer>
</template>

<script>
import Notifications from '~/components/Notifications.vue'
export default {
  name: "Footer",
  components: {
    Notifications
  },
  data() {
    return {
      notificationData: []
    };
  },
  methods: {
     
  }
};
</script>

<style></style>