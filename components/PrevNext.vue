<template>
  <div v-if="prev || next" class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
      class="bg-black text-white px-4 py-1 hover:bg-gray-700 transform duration-500 ease-in-out"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'articles-slug', params: { slug: next.slug } }"
      class="bg-black text-white px-4 py-1 hover:bg-gray-700 transform duration-500 ease-in-out"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
