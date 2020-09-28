export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = 5;

  const allArticles = await $content('articles').fetch();

  const articleCount = allArticles.length;

  const lastPage = Math.ceil(articleCount / perPage);

  const lastPageCount = articleCount % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return articleCount - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedArticles = await $content('articles')
    .only(['title', 'description', 'image', 'slug', 'published'])
    .sortBy('published', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' });
  }

  return {
    allArticles,
    paginatedArticles,
  };
};
