import React from "react";
import "./index.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card-container">
      <h3>{article.title}</h3>
      <p className="article-card-body">{article.body}</p>
      <div className="article-card-metadata-container">
        <span>{article.author}</span>
        <span>{article.creation_date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
