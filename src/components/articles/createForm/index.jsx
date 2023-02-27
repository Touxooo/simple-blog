import React from "react";
import "./index.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup
    .string()
    .required("The title is required")
    .max(128, "The title is too long, maximum 128 characters"),
  description: yup
    .string()
    .required("The description is required")
    .max(256, "The description is too long, maximum 256 characters"),
  body: yup
    .string()
    .required("The body is required")
    .max(2048, "The body is too long, maximum 2048 characters"),
  author: yup
    .string()
    .required("The author is required")
    .max(64, "The author is too long, maximum 64 characters"),
});

const CreateArticleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    window.alert(JSON.stringify(data));
    reset();
  };

  const body = watch("body");

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
      <p className="create-article-form-error">{errors.title?.message}</p>
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      <p className="create-article-form-error">{errors.description?.message}</p>
      <textarea
        className="create-article-form-input body"
        type="text"
        placeholder="Body"
        rows={10}
        maxLength={2048}
        {...register("body")}
      />
      <div className="create-article-form-body-details">
        <p className="create-article-form-error body">{errors.body?.message}</p>
        <p>{body?.length}/2048</p>
      </div>
      <input
        className="create-article-form-input"
        type="text"
        placeholder="Author"
        {...register("author")}
      />
      <p className="create-article-form-error">{errors.author?.message}</p>
      <button className="create-article-form-button" type="submit">
        Submit Article
      </button>
    </form>
  );
};

export default CreateArticleForm;
