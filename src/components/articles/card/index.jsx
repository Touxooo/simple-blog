import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link className="article-card-container" to={`/article/${article.id}`}>
      <h3>{article.title}</h3>
      <p className="article-card-body">{article.body}</p>
      <div className="article-card-metadata-container">
        <span>{article.author}</span>
        <span>{article.creation_date}</span>
      </div>
    </Link>
  );
};

export default ArticleCard;
