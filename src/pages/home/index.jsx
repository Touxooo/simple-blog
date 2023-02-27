import React from "react";
import ArticleList from "../../components/articles/list";
import articles from "../../constants/articles";
import "./index.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
