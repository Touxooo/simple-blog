import React from "react";
import "./index.css";

import { useParams } from "react-router-dom";

import articles from "../../constants/articles";
import ArticleHeader from "../../components/articles/header";
import ArticleBody from "../../components/articles/body";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles[id];

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
