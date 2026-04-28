import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendList = ({ children }) => {
  const parentContext = useContext(TrendContext);
  if (
    !parentContext.componentName ||
    parentContext.componentName !== "TrendBox"
  ) {
    return <></>;
  }

  const providerProps = {
    ...parentContext,
    componentName: "TrendList",
  };

  return (
    <TrendContext.Provider value={providerProps}>
      <div className="trend-list">{children}</div>
    </TrendContext.Provider>
  );
};

export default TrendList;
