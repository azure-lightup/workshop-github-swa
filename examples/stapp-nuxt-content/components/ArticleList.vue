<template>
  <nuxt-link :to="slug">
    <h2>{{ title }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    slug: { type: String, required: true },
  },
}
</script>
