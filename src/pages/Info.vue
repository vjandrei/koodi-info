<template>
  <Layout class="info">
    <div class="relative flex flex-col w-full mx-auto xl:flex-row mx-auto" style="max-width: 1440px;"> 
        <div class="w-full">
            <div class="xl:fixed static p-8  xl:h-screen flex flex-col justify-center" style="width:496px;">

              <div>
               <div class="px-6 pt-16 pb-12 md:max-w-3xl md:mx-auto lg:max-w-full lg:pt-0">
                <span class="h-10 lg:h-12">
                  <g-link to="/"><h3 class="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-xl font-black uppercase;">Koodi.info</h3></g-link>
                </span>
                 <div class="mt-8 lg:mt-16"> 
                   <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Coming soon</p> 
                   <h1 class="mt-2 text-4xl leading-tight xl:text-5xl font-semibold font-display text-white">Inspiration, meet implementation.</h1> 
                   <p class="mt-3 text-lg max-w-xl lg:max-w-3xl text-gray-400 xl:text-2xl"> Beautifully designed components and templates, hand-crafted using the CSS framework you already know and love. </p> 
                  </div> 
                  <div class="mt-10"> 
                    <p class="text-base xl:text-lg font-medium text-white"> Sign up for project updates, early previews, and to find out when it’s ready. </p> 
                    <form id="form" action="https://ck-proxy.adamwathan.now.sh/api/subscribers" data-form-id="1074308" data-api-key="0maQ6AJcKCKVQnJlq7gL1w" method="POST" class="relative mt-5 lg:pb-12">
                    <div class="sm:flex">
                      <input type="email" required="required" placeholder="Enter your email" class="block sm:max-w-xs w-full px-5 py-3 text-lg leading-snug appearance-none bg-white rounded-lg focus:outline-none focus:shadow-outline"> 
                      <button class="mt-4 relative h-12 sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto px-6 py-3 font-semibold leading-snug bg-gray-700 text-white uppercase tracking-wide rounded-lg shadow-md focus:outline-none focus:shadow-outline hover:bg-gray-600">
                        <span class="">Subscribe</span> 
                       </button></div>
                    </form> 
                       </div>
                    </div>
              </div>
              
            </div>
            <div class="xl:absolute static w-full xl:w-1/2 right-0 p-8">
             <div v-for="(item, i) in $page.posts.entries" :key="item.id" :post="item" class="w-full px-2 my-4" :class="{'': i > 0 }">
            <Card :post="item" />
          </div>
              2 Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            Fusce nisl arcu, rhoncus sit amet scelerisque quis, iaculis vel mi. Mauris non orci sit amet sem maximus vulputate. Nulla aliquet sapien ipsum, vitae lacinia est finibus eget. Maecenas at mi vitae eros feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse leo sem, hendrerit at elementum eu, pulvinar vel enim. Morbi id orci justo. Vestibulum commodo dui eu nibh sodales, nec tristique mi pulvinar. Vestibulum vel mauris elementum, pharetra tellus et, commodo erat. Sed sed augue augue. Mauris non auctor dolor. Vivamus egestas lectus neque, a commodo diam blandit at.

            Fusce sit amet purus imperdiet, placerat dui quis, dignissim lacus. Praesent luctus et mauris sed gravida. Curabitur placerat mauris sed egestas volutpat. Aliquam ac velit scelerisque, consectetur nisl a, accumsan turpis. Quisque pretium nunc in massa fermentum accumsan. Curabitur fermentum lorem nulla, id auctor erat porta quis. Nulla dictum lacinia justo, ac ultricies nunc tristique eu. Mauris non lorem at nibh faucibus porta et ut lectus. Ut tempor erat nisl. Nulla odio leo, varius sit amet tristique id, cursus eget ipsum. Integer molestie magna elit. Fusce ac tellus in eros pharetra fermentum ac non libero.

            Aenean pellentesque dui urna, et dignissim magna egestas et. Fusce diam enim, interdum at odio mollis, accumsan maximus mauris. Nulla facilisi. Nulla lobortis urna sed mi euismod, eu tristique est cursus. Curabitur quis ipsum scelerisque, suscipit diam et, feugiat felis. Pellentesque sit amet suscipit enim. Nam pharetra fringilla sem. Aenean commodo pulvinar dui tempus fringilla. Sed vulputate, dui sed facilisis mattis, metus sem aliquam velit, non aliquam neque risus quis diam. Morbi in interdum magna. Mauris iaculis eros at dui lacinia, in iaculis dui eleifend. Maecenas mollis hendrerit gravida.

            Maecenas non ornare libero. Nunc venenatis suscipit mauris id lobortis. Pellentesque id ex aliquet, lobortis orci eu, ullamcorper erat. Pellentesque vel ante eu odio malesuada luctus. Ut ac est nec nunc hendrerit dapibus. Donec bibendum, ipsum a imperdiet hendrerit, ipsum arcu egestas odio, vitae mattis lacus libero vel ex. Mauris ac justo odio. Phasellus vehicula lacus dolor. Morbi euismod porttitor orci, vitae maximus sem viverra tempor. Vestibulum dapibus blandit tortor quis volutpat. Cras mattis mi sed urna volutpat ornare. Vestibulum pulvinar venenatis turpis eget porta. Donec condimentum quam vel sapien cursus dapibus. Nullam scelerisque, elit sed mollis vehicula, arcu risus tristique lacus, in vestibulum augue leo viverra odio. Donec fringilla odio et ante dapibus, in porta arcu rutrum. Vivamus ipsum ex, lacinia sit amet purus quis, dapibus vestibulum urna.
            </div>
        </div>

       
    </div>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
      formData: {},
      notificationData: []
    }
  },
  components: {
    Card,
  },
  metaInfo () {
    return {
      title: this.$page.meta.globals.homePage.pageSeoContent.title,
      meta: [
        { name: 'description', content: this.$page.meta.globals.homePage.pageSeoContent.description },
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.title },
        { property: "og:description", content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.description },
        { property: "og:url", content: "https://koodi.info" },
        { property: "og:image",  content: this.$page.meta.globals.homePage.pageSeoContent.social.facebook.image.url },
        { name: "twitter:card", content: "Summary" },
        { name: "twitter:title", content: this.$page.meta.globals.homePage.pageSeoContent.social.twitter.title },
        { name: "twitter:description", content: this.$page.meta.globals.homePage.pageSeoContent.description },
        { name: "twitter:site", content: "@vj_andrei" },
        { name: "twitter:creator", content: "@vj_andrei" },
        { name: "twitter:image", content: this.$page.meta.globals.homePage.pageSeoContent.social.twitter.image.url },
      ],
    }
  },
  methods: {
   
  }
}
</script>

<page-query> 
query Craft ($slug: String){
  meta: craft{
    globals{
       homePage {
        pageTitle
        pageContent
        pageSeoContent {
          title
          description
          social {
            twitter {
              title
              description
              image{
                url
              }
            }
            facebook {
              title
              description
              image{
                url
              }
            }
          }
        }
      }
    }
  }
  posts: craft {
  entries  (slug: $slug) {
    ... on craft_KoodiInfo{
        uri
        slug
        title
        postTitle
      	pageSummaryContent{
          content
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>