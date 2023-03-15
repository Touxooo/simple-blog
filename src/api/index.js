import {
  createArticle,
  getArticleById,
  getArticles,
  getFilteredArticles,
  deleteArticleById,
} from "./articles";

const api = {
  articles: {
    getArticleById,
    getArticles,
    getFilteredArticles,
    createArticle,
    deleteArticleById,
  },
};

export default api;
