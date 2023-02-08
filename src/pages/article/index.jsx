import React from "react";
import "./index.css";

import articles from "../../constants/articles";

const ArticlePage = () => {
  const article = articles[0];

  return (
    <div className="article-page-container">
      <h1>{article.title}</h1>
      <span>{article.author}</span>
      <p>{article.body}</p>
      <span>{article.creation_date}</span>
    </div>
  );
};

export default ArticlePage;
