<template>
  <Layout>
    <div class="min-h-screen flex flex-col justify-start sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div
          class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <div class="max-w-md mx-auto">
            <div>
              <img src="/img/logo.svg" class="h-7 sm:h-8" />
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
              </div>
              <div
                class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
              >
                <p>Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-cyan-600 hover:text-cyan-700"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
