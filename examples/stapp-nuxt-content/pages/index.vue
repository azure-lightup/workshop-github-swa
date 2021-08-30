<template>
  <div>
    <ArticleList
      v-for="(article, index) in articles"
      :key="index"
      :title="article.title"
      :slug="article.slug"
    ></ArticleList>
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
