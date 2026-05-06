import { ToolkitProvider } from "./stores/toolkit/ToolkitProvider.jsx";
import HelloRouter from "./router/HelloRouter.jsx";

export default function App() {
  console.log("App");
  // return
  return (
    <ToolkitProvider>
      {/* <TodoMain /> */}
      <HelloRouter />
      {/* <ArticleMain2> */}
      {/* <AssignmentMain /> */}
      {/* <TmdbMain />; */}
    </ToolkitProvider>
  );
}
