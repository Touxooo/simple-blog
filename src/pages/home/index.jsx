import React from "react";
import ArticleList from "../../components/articles/list";
import api from "../../api";
import "./index.css";

const HomePage = () => {
  const articles = api.articles.getArticles();

  return (
    <div className="home-page-container">
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
