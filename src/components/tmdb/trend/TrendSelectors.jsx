import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendSelectors = () => {
  const { componentName, selectorsKR, setSelectors } = useContext(TrendContext);

  if (!componentName || componentName !== "TrendHeader") {
    return <></>;
  }

  const todayButtonHandler = () => {
    setSelectors("today");
  };
  const weekButtonHandler = () => {
    setSelectors("week");
  };

  return (
    <div>
      <button onClick={todayButtonHandler}>{selectorsKR[0]}</button>
      <button onClick={weekButtonHandler}>{selectorsKR[1]}</button>
    </div>
  );
};

export default TrendSelectors;
