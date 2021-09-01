<template>
  <nuxt-link :to="slug">
    <div class="border p-4 rounded my-1">
      <h2 class="text-2xl mb-2">{{ title }}</h2>
      <div class="text-l">{{ date }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    date: { type: String, required: false, default: 'xxxx.xx.xx' },
    slug: { type: String, required: true },
  },
}
</script>
