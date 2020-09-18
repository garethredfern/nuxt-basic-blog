<template>
  <div>
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        All Articles
      </h2>
    </div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';

export default {
  name: 'ArticleListPage',
  components: {
    ArticleList,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'published'])
      .sortBy('published', 'desc')
      .fetch();

    return {
      articles,
    };
  },
};
</script>
