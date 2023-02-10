import React from "react";
import "./index.css";

const ArticleBody = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default ArticleBody;
