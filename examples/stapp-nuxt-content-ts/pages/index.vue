<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold my-6">Blog Posts</h1>
    <div class="grid grid-cols-1 gap-4">
      <ArticleList
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      ></ArticleList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context, Article } from '@nuxt/types'

export default Vue.extend({
  async asyncData({ $content }: Context) {
    const query = $content('/')
    const articles = await query.fetch()
    return { articles }
  },
  data() {
    return { articles: [] as Article[] } // template で型が効くようにするために必要
  },
})
</script>
