import React from "react";
import "./index.css";

import articles from "../../constants/articles";

const ArticlePage = () => {
  const article = articles[0];

  return (
    <div className="article-page-container">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <div className="article-page-metadata-container">
        <span>{article.author}</span>
        <span>{article.creation_date}</span>
      </div>
    </div>
  );
};

export default ArticlePage;
