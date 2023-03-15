import React from "react";
import "./index.css";

import ArticleCard from "../card";
import SearchBar from "../../global/searchBar";

const ArticleList = ({ articles }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredArticles, setFilteredArticles] = React.useState(articles);

  React.useEffect(() => {
    const tmpFilteredArticles = articles.filter((article) => {
      return article.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredArticles(tmpFilteredArticles);
  }, [articles, searchTerm]);

  return (
    <div className="article-list-container">
      <SearchBar value={searchTerm} setValue={setSearchTerm} />
      {filteredArticles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
