<template>
  <div>
  <section class="shadow-lg">
    <nav class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
      <div><h3 class="text-3xl font-black uppercase">Koodi.info</h3></div>
      <div class="w-full flex-grow lg:flex lg:content-center lg:items-center lg:w-auto hidden lg:block ">
          <div class="flex-1 w-full mx-auto max-w-sm py-4 lg:py-0 ">
            <input type="search" placeholder="Etsi" class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-300 rounded py-1 px-2 pl-4 appearance-none leading-normal">
          </div>
          <ul class="list-reset lg:flex justify-end items-center">
            <li class="mr-3 py-2 lg:py-0">
                <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Active</a>
            </li>
            <li class="mr-3 py-2 lg:py-0">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4" href="#">link</a>
            </li>
            <li class="mr-3 py-2 lg:py-0">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
      </div>
      
      </div>
    </nav>
  </section>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <slot/>
  </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="~/assets/css/main.css"></style>