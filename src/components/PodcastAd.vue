<template>
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img
        class="rounded-lg h-32"
        :src="`${podcast.cover}`"
        alt="Podcastin logo"
      />
    </div>
    <div class="mt-4 md:ml-6">
      <div
        class="text-xs font-bold tracking-widest uppercase mb-2 text-teal-700"
      >
        🎙 Ystävyys podcatit
      </div>

      <g-link
        :to="`${podcast.rss}`"
        target="_black"
        class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >{{ podcast.title }}</g-link
      >
      <p class="mt-2 text-gray-600 text-sm">{{ podcast.about }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PodcastAd",
  props: ["podcast"],
  data() {
    return {};
  }
};
</script>
