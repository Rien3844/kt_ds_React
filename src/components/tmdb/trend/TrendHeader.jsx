import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";
import TrendSelectors from "./TrendSelectors.jsx";

const TrendHeader = ({ children }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendBox") {
    return <></>;
  }

  const providerProps = {
    componentName: "TrendHeader",
  };

  return (
    <TrendContext.Provider value={providerProps}>
      {children}
    </TrendContext.Provider>
  );
};
export default TrendHeader;
