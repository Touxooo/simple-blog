import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import ArticlePage from "./pages/article";
import CreateArticlePage from "./pages/createArticle";
import HomePage from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateArticlePage />
  </React.StrictMode>
);
