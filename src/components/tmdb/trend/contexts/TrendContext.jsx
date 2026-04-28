import { createContext } from "react";

const TrendContext = createContext({
  componentName: "",
  selectors: "today",
  selectorsKR: "오늘",
});

export default TrendContext;
