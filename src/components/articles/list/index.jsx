import React from "react";
import "./index.css";

import ArticleCard from "../card";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list-container">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
