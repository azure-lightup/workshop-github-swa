<template>
  <nuxt-link :to="article.slug">
    <div class="border p-4 rounded my-1">
      <h2 class="text-2xl mb-2">{{ article.title }}</h2>
      <div class="text-l">{{ article.date || 'xxxx.xx.xx' }}</div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Article } from '@nuxt/types'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true,
    } as PropOptions<Article>,
  },
})
</script>
