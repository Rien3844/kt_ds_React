import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";
import TrendSelectors from "./TrendSelectors.jsx";

const TrendHeader = ({ children }) => {
  const parentContext = useContext(TrendContext);
  if (
    !parentContext.componentName ||
    parentContext.componentName !== "TrendBox"
  ) {
    return <></>;
  }

  const providerProps = {
    ...parentContext,
    componentName: "TrendHeader",
  };

  return (
    <TrendContext.Provider value={providerProps}>
      {children}
    </TrendContext.Provider>
  );
};
export default TrendHeader;
