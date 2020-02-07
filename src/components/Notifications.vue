<template>
      <div>
      <div v-for="notification in notificationData" track-by="$index" v-bind:class="notification.type" v-bind:key="notification.id" class="transform transition-transform ease-out duration-700 fixed bottom-0 right-0 left-0 sm:w-1/2 shadow-md h-24 mx-auto md:block rounded-lg z-10 bg-white " style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;">
        <div class="flex flex-row px-4 py-4">
            <div class="text-lg font-serif font-black" >
              <h2>{{ notification.title }}</h2>
              <p>{{ notification.message }}</p>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
  name: "Notifications",
  data() {
    return {
      on: true,
    };
  },

  props: ["notificationData"],

  methods: {
    makeNotification: function(sentData) {
      this.notificationData.push(sentData);
    }
  }
};
</script>


<style lang="scss">

</style>