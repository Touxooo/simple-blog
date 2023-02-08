import React from "react";
import "./index.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card-container">
      <h3>{article.title}</h3>
      <span>{article.author}</span>
      <span>{article.creation_date}</span>
    </div>
  );
};

export default ArticleCard;
