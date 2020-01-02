<template>
  <div>
  	<h1 v-html="$page.posts.entry.title" />
  	<div v-html="$page.posts.entry.summaryContent.content" />
  </div>
</template>

<page-query>
query Craft ($id: [Int]){
  posts: craft {
  entry (id: $id) {
    ... on craft_KoodiInfo{
        id
        uri
        slug
        title
      	summaryContent{
          content
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  
};
</script>