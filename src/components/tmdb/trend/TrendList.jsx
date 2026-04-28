import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendList = ({ children }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendBox") {
    return <></>;
  }

  const providerProps = {
    componentName: "TrendList",
  };

  return (
    <TrendContext.Provider value={providerProps}>
      {children}
    </TrendContext.Provider>
  );
};

export default TrendList;
