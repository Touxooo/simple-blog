import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home";
import ArticlePage from "../pages/article";
import CreateArticlePage from "../pages/createArticle";
import Navbar from "../components/global/navbar";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/article/:id", element: <ArticlePage /> },
  { path: "/create-article", element: <CreateArticlePage /> },
]);

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
