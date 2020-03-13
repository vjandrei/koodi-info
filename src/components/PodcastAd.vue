<template>
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img
        class="rounded-lg h-32"
        src="https://images.theabcdn.com/i/36197627/300x300/c"
        alt="Podcastin logo"
      />
    </div>
    <div class="mt-4 md:ml-6">
      <div
        class="text-xs font-bold tracking-widest uppercase mb-2 text-teal-700"
      >
        🎙 Ystävyys podcatit
      </div>
      <a
        href="https://audioboom.com/channels/5016335"
        target="_black"
        class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >Koodikahvit</a
      >
      <p class="mt-2 text-gray-600 text-sm">
        Koodikahvit on podi, jossa istutaan alas kahvikupposen äärelle
        keskustelemaan IT-alasta, koodauksesta ja kaikesta siihen liittyvästä.
      </p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";
import RSSParser from "rss-parser";
export default {
  name: "PodcastAd",
  props: {
    feedUrl: String,
    name: String,
    limit: Number,
    loadMore: Boolean
  },
  data() {
    return {
      loading: true,
      error: "",
      feed: {}
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    feedUrl() {
      this.fetchData();
    }
  },
  async mounted() {
    try {
      const data = await fetch(this.feedUrl);
      if (data.ok) {
        const text = await data.text();
        const parser = new RSSParser();
        parser.parseString(text, (err, parsed) => {
          this.loading = false;
          if (err) {
            this.error = `Error occured while parsing RSS Feed ${err.toString()}`;
          } else {
            this.feed = parsed;
          }
        });
      } else {
        this.error = "Error occured while fetching the feed";
        this.loading = false;
      }
    } catch (e) {
      if (e.toString() === "TypeError: Failed to fetch") {
        this.error = "Error due to CORS policy";
      } else {
        this.error = e.toString();
      }
      this.loading = false;
    }
  },
  methods: {
    getArticles() {
      if (this.feed.items && this.feed.items) {
        return this.feed.items.slice(0, this.limit);
      }
    }
  }
};
</script>
