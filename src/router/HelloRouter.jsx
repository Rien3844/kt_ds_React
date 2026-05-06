import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TmdbMain from "../components/tmdb/TmdbMain.jsx";
import TodoMain from "../components/todo/TodoMain.jsx";
import ArticleMain from "../components/articles/ArticleMain.jsx";
import { MainLayout } from "../components/layout/MainLayout.jsx";
import { NotFoundPage } from "../components/layout/error/NotFoundPage.jsx";
import { ArticleLayout } from "../components/layout/ArticleLayout.jsx";
import { ArticleDetail } from "../components/articles/ArticleDetail.jsx";

const HelloRouter = () => {
  // Route 설정.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "tmdb",
          element: <TmdbMain />,
        },
        {
          path: "todo",
          element: <TodoMain />,
        },
        {
          path: "article",
          element: <ArticleLayout />,
          children: [
            { index: true, element: <ArticleMain /> },
            { path: ":id", element: <ArticleDetail /> },
          ],
        },
      ],
    },
  ]);

  // Router Component 생성.
  return <RouterProvider router={router} />;
};

export default HelloRouter;
