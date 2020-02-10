<template>
  <Layout class="h-full">
    <section class="container mx-auto px-4 py-3">
    <div class="sm:w-3/4 w-full mx-auto">
      <div class="text-center sm:mt-16 mt-8">
        <span class="text-xs font-bold uppercase text-teal-500 mb-2 block">Tietoja sivusta</span>
        <h1 class="sm:text-5xl text-2xl font-bold leading-tight mt-0 mb-4">Muutamalla lauseella Koodi.info</h1>
      </div>

      <p class="my-6 sm:text-2xl text-lg leading-relaxed tracking-wide text-teal-900">
      Koodi.info on blogi joka yhdistelee tekstiä, audiota ja kuvakaappausta ohjelmistoalan liittyvistä aiheista.
      Aiheina ovat mm. webin teknlogiat, käyttöliittymäsuunnittelu, arkkitehtuurit, muut ohjelmisto teknologiat sekä avointa keskustelua ohjelmistoalasta.
      </p>

      <p class="sm:text-3xl text-xl tracking-wider text-teal-800 text-center my-16">
      Kiva kun piipahdit tällä sivulla!
      Jos sinulla on jotain kysyttävää ole yhteydessä <a href="https://twitter.com/vj_andrei" target="blank">Twitterin</a> kautta.
      <span>💌</span>
      </p>

      <h3 class="sm:text-4xl text-xl text-center text-teal-500 font-semibold">Koodi.info takana häärää</h3>
      <g-image class="mx-auto my-8" src="~/assets/andreas.jpg" width="500"/>
      <p class="sm:text-2xl text-xl tracking-normal text-teal-900 my-16"> 
      Moikka! 👋🏻 Olen Andreas Koutsoukos tämän sivuston kehittäjä sekä isäntä. Osaamisen jakaminen on minulle ollut tärkeätä. Päätin siksi toteuttaa kanavan jossa voin lisää vuorovaikutusta ja sitä kautta jakaa osaamista. Olen myös itse alanvaihtaja 👨🏻‍🍳 ja oppinut asioita paljon itse kokeilemalla. Päivätyökseni työskentelen käyttöliittymäsuunnittelun 👨🏻‍🎨 parissa.
      </p>

      <h3 class="bg-teal-100 text-teal-500 p-4 text-xl text-center">
        Kiinnostaako tehdä sisältöäjä Koodi.infoon? <a href="" class="block text-teal-900">Tulossa</a> 
      </h3>

    </div> 
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Tietoa Koodi.info'
  }
}
</script>
