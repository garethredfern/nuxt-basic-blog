<template>
  <div>
    <ul class="text-gray-500 max-w-5xl mx-auto">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="mb-12 bg-white p-5 rounded shadow"
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="md:grid md:gap-4 md:grid-cols-2"
        >
          <img
            v-if="article.image"
            :src="article.image"
            alt=""
            class="mb-4 border rounded"
          />
          <div>
            <h2 class="font-bold text-gray-900 text-2xl mb-2">
              {{ article.title }}
            </h2>
            <p class="text-lg">{{ article.description }}</p>
            <p class="font-bold text-indigo-600 mt-2">
              Read more<span class="text-indigo-600">&hellip;</span>
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 5" :total="total" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination';

export default {
  name: 'ArticleList',
  components: {
    Pagination,
  },
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>
