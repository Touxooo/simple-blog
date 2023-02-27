import React from "react";
import "./index.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyInput from "../../global/input";

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
      <MyInput
        title="Title"
        register={register("title")}
        errorLabel={errors.title?.message}
        placeholder="Title"
      />
      <MyInput
        title="Description"
        register={register("description")}
        errorLabel={errors.description?.message}
        placeholder="Description"
      />
      <MyInput
        title="Body"
        register={register("body")}
        errorLabel={errors.body?.message}
        placeholder="Body"
        textArea
        rows={5}
        maxLength={2048}
        actualLength={body?.length}
      />
      <MyInput
        title="Author"
        register={register("author")}
        errorLabel={errors.author?.message}
        placeholder="Author"
      />
      <button className="create-article-form-button" type="submit">
        Publish 🚀
      </button>
    </form>
  );
};

export default CreateArticleForm;
