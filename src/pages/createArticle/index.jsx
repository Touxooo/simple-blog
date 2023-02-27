import React from "react";
import CreateArticleForm from "../../components/articles/createForm";
import "./index.css";

const CreateArticlePage = () => {
  return (
    <div className="create-article-page-container">
      <h2>Create a new article</h2>
      <CreateArticleForm />
    </div>
  );
};

export default CreateArticlePage;
