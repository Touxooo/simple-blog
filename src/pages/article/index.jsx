import React, { useEffect, useState } from "react";
import "./index.css";

import { useParams, useNavigate } from "react-router-dom";

import ArticleHeader from "../../components/articles/header";
import ArticleBody from "../../components/articles/body";
import api from "../../api";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchedArticle = await api.articles.getArticleById(id);
      setArticle(fetchedArticle);
    };
    fetchArticle();
  }, [id]);

  const deleteArticle = async () => {
    await api.articles.deleteArticleById(id);
    alert("Article deleted successfully! 🎉");
    navigate("/");
  };

  if (!article) return <h1>Article not found</h1>;

  return (
    <div className="article-page-container">
      <ArticleHeader
        author={article.author}
        creationDate={article.creationDate}
        readTime={article.readMinuteTime}
      />
      <span className="article-page-divider" />
      <ArticleBody title={article.title} body={article.body} />
      <button className="article-page-button" onClick={() => deleteArticle()}>
        Delete article
      </button>
    </div>
  );
};

export default ArticlePage;
