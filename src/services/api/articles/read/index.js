import articles from "../../../../constants/articles";

export const getArticleById = (id) => {
  const article = articles.find((article) => article.id == id);

  return article;
};

export const getArticles = () => {
  return articles;
};

export const getFilteredArticles = (filter) => {
  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(filter.toLowerCase());
  });

  return filteredArticles;
};
