<template>
  <article class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-2">{{ page.title }}</h1>
    <p class="mb-4 text-xl">{{ page.date }}</p>
    <hr />
    <nuxt-content :document="page" class="my-6" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context, Article } from '@nuxt/types'

export default Vue.extend({
  async asyncData({ $content, params }: Context) {
    const page = await $content('/', params.slug).fetch<Article>()
    return { page }
  },
  data() {
    return { page: {} as Article }
  },
})
</script>
