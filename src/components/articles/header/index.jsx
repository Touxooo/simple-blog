import React from "react";
import "./index.css";

const ArticleHeader = ({ author, creationDate, readTime }) => {
  return (
    <div className="article-header-container">
      <span>{author}</span>
      <span>
        {creationDate} • {readTime} min read
      </span>
    </div>
  );
};

export default ArticleHeader;
