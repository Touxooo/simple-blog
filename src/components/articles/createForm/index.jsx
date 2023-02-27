import React from "react";
import "./index.css";

const CreateArticleForm = () => {
  return (
    <form className="create-article-form-container">
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Title"
      />
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Description"
      />
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Body"
      />
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Author"
      />
      <button className="create-article-form-button" type="submit">
        Submit article
      </button>
    </form>
  );
};

export default CreateArticleForm;
