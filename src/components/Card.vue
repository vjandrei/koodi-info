<template>
  <article
    itemscope="itemscope"
    itemtype="http://schema.org/CreativeWork"
    class="my-4 mx-4 bg-white py-8 px-8"
  >
    <g-link :to="`${post.slug}/`" class="flex items-center">
      <div class="max-w-md">
        <h5
          class="text-xs font-bold tracking-widest uppercase mb-2 text-teal-700"
        >
          {{ post.subject }}
        </h5>
        <h3
          itemprop="name"
          class="text-2xl md:text-xl font-semibold font-serif text-brand-dark leading-tight"
        >
          {{ post.title }}
        </h3>
        <div class="flex items-center my-2">
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="calendar-alt"
            class="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            />
          </svg>
          <time :datetime="post.datetime" class="text-sm font-semibold">{{
            formatPublishDate(post.datetime)
          }}</time>
        </div>
        <div
          class="text-sm text-gray-800 mt-2"
          v-html="excerpt(post, 150, ' ...')"
        ></div>
        <div class="flex align-middle text-sm text-gray-800 font-semibold mt-4">
          <span
            class="mr-2 font-normal text-xs xl:text-sm text-gray-800"
          ></span>
          <div class="flex items-center mr-4" v-if="post.audio">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="headphones"
              class="w-4 h-4 mr-2 fill-current text-brand-neutral"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0017.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 00512 336v-48c0-141.479-114.496-256-256-256z"
              />
            </svg>
            <span>Audion</span>
          </div>
          <div class="flex items-center" v-if="post.video">
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="youtube"
              class="w-4 h-4 mr-2 fill-current text-brand-neutral"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
            <span>Videon</span>
          </div>
        </div>
      </div>
    </g-link>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return this.$moment(this.post.datetime).format("DD.MM.YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return this.$moment(date).format("DD.MM.YYYY");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.description
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    }
  }
};
</script>
