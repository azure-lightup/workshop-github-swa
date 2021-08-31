<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold my-6">Blog Posts</h1>
    <div class="grid grid-cols-1 gap-4">
      <ArticleList
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :date="article.date"
        :slug="article.slug"
      ></ArticleList>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const query = await $content('/')
    const articles = await query.fetch()
    return { articles }
  },
}
</script>
