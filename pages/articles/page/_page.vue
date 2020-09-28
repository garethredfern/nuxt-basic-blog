<template>
  <div>
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        All Articles ({{ allArticles.length }})
      </h2>
    </div>
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
  </div>
</template>

<script>
import getContent from '@/utils/getContent';
import ArticleList from '@/components/ArticleList';

export default {
  name: 'ArticleListPage',
  components: {
    ArticleList,
  },
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    };
  },
  head() {
    return {
      title: `Articles Page ${this.$route.params.page} - Learning Laravel and VueJS`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`,
        },
      ],
    };
  },
};
</script>
