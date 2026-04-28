import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendSelectors = ({ selectors, setSelectors }) => {
  const { componentName } = useContext(TrendContext);

  if (!componentName || componentName !== "TrendHeader") {
    return <></>;
  }

  const today = "today";
  const todayKR = "오늘";
  const week = "week";
  const weekKR = "이번 주";

  const todayButtonHandler = () => {
    // 오늘이 눌렸을 때
    setSelectors(today);
    setSelectorsKR(todayKR);
  };
  const weekButtonHandler = () => {
    // 이번주가 눌렷을 때
    setSelectors(week);
    setSelectorsKR(weekKR);
  };

  return (
    <div>
      <button onClick={todayButtonHandler}>오늘</button>
      <button onClick={weekButtonHandler}>이번주</button>
    </div>
  );
};

export default TrendSelectors;
