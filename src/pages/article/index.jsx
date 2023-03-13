import React from "react";
import "./index.css";

import { useParams } from "react-router-dom";

import ArticleHeader from "../../components/articles/header";
import ArticleBody from "../../components/articles/body";
import api from "../../api";

const ArticlePage = () => {
  const { id } = useParams();
  const article = api.articles.getArticleById(id);

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
    </div>
  );
};

export default ArticlePage;
