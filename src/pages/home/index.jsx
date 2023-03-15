import React from "react";
import ArticleList from "../../components/articles/list";
import api from "../../api";
import "./index.css";

const HomePage = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const fetchArticles = async () => {
      const articles = await api.articles.getArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-container">
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
