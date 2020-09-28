<template>
  <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
</template>

<script>
import getContent from '@/utils/getContent';
import ArticleList from '@/components/ArticleList';

export default {
  name: 'HomePage',
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
};
</script>
