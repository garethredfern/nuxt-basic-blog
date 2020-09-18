<template>
  <div>
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        Tag: {{ $route.params.tag }}
      </h2>
    </div>
    <ArticleList :articles="articlesByTag" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';

export default {
  name: 'TagPage',
  components: {
    ArticleList,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
      .sortBy('published', 'desc')
      .fetch();
    const articlesByTag = articles.filter((article) => {
      const articleTags = article.tags.map((x) => x.toLowerCase());
      return articleTags.includes(params.tag);
    });
    return {
      articlesByTag,
    };
  },
};
</script>
