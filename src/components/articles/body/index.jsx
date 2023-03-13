import React from "react";
import "./index.css";

import ReactMarkdown from "react-markdown";

const ArticleBody = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default ArticleBody;
