import ArticleMain from "./components/articles/ArticleMain.jsx";
import TodoMain from "./components/todo/TodoMain.jsx";
import AssignmentMain from "./components/homework/counter&calc/AssignmentMain.jsx";
import TmdbMain from "./components/tmdb/TmdbMain.jsx";
import { ToolkitProvider } from "./stores/toolkit/ToolkitProvider.jsx";

export default function App() {
  console.log("App");
  // return
  return (
    <ToolkitProvider>
      {/* <TodoMain /> */}
      <ArticleMain />
      {/* <AssignmentMain /> */}
      {/* <TmdbMain />; */}
    </ToolkitProvider>
  );
}
