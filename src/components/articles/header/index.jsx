import React from "react";
import "./index.css";

const ArticleHeader = ({ author, creationDate, readTime }) => {
  // console.log(creationDate.seconds);
  const date = creationDate.toDate();

  return (
    <div className="article-header-container">
      <span>{author}</span>
      <span>{date.toLocaleDateString()} • 5 min read</span>
    </div>
  );
};

export default ArticleHeader;
