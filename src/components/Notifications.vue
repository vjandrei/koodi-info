<template>
    <div class="transform transition-transform ease-out duration-700  fixed bottom-0 sm:w-1/2 shadow-md h-24  mx-auto md:block rounded-lg z-10 bg-white " style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;">
        <div class="flex flex-row px-4 py-4">
           {{ this.notificationData }}
           <button class='success' @click='makeNotification(demoSuccess)'>Success</button>
            <div class="text-lg font-serif font-black" v-for="notification in notificationData"  track-by="$index" v-bind:class="notification.type" v-bind:key="notification.id">
              <h2>{{ notification.title }}</h2>
              <p>{{ notification.message }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "Notifications",
  data() {
    return {
      testSuccess: {
        type: "success",
        title: "Kiitos",
        message: "Viestisi on lähetetty onnistuneesti"
      },
      demoSuccess: {
        type: "demo",
        title: "demo",
        message: "demo"
      }
    };
  },

  props: ["notificationData"],

  methods: {
    makeNotification: function(sentData) {
      console.log(this.demoSuccess);
      this.notificationData.push(this.demoSuccess);
    }
  }
};
</script>


<style lang="scss">

</style>