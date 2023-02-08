import React from "react";
import "./index.css";

import articles from "../../../constants/articles";
import ArticleCard from "../card";

const ArticleList = () => {
  return (
    <div className="article-list-container">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
