import React from "react";
import ArticleList from "../../components/articles/list";
import { getArticles } from "../../services/api/articles/read";
import "./index.css";

const HomePage = () => {
  const articles = getArticles();

  return (
    <div className="home-page-container">
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
