import articles from "../../../../constants/articles";

export const getArticleById = (id) => {
  const article = articles.find((article) => article.id == id);

  return article;
};

export const getArticles = () => {
  return articles;
};
