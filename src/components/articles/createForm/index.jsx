import React from "react";
import "./index.css";

import { useForm } from "react-hook-form";

const CreateArticleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    window.alert(JSON.stringify(data));
  };

  return (
    <form
      className="create-article-form-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Title"
        {...register("title")}
      />
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      <textarea
        className="create-article-form-input body"
        type="text"
        placeholder="Body"
        rows={10}
        {...register("body")}
      />
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Author"
        {...register("author")}
      />
      <button className="create-article-form-button" type="submit">
        Submit article
      </button>
    </form>
  );
};

export default CreateArticleForm;
