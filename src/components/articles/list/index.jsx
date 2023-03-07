import React from "react";
import "./index.css";

import ArticleCard from "../card";
import SearchBar from "../../global/searchBar";
import { getFilteredArticles } from "../../../services/api/articles/read";

const ArticleList = ({ articles }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredArticles, setFilteredArticles] = React.useState(articles);

  React.useEffect(() => {
    const filteredArticles = getFilteredArticles(searchTerm);
    setFilteredArticles(filteredArticles);
  }, [searchTerm]);

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
