import React from "react";
import "./index.css";

const ArticleCard = ({ article }) => {
  return (
    <a className="article-card-container" href={`/article/${article.id}`}>
      <h3>{article.title}</h3>
      <p className="article-card-body">{article.body}</p>
      <div className="article-card-metadata-container">
        <span>{article.author}</span>
        <span>{article.creation_date}</span>
      </div>
    </a>
  );
};

export default ArticleCard;
