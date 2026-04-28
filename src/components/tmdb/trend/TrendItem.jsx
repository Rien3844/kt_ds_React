import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendItem = ({ details, selectors, selectorsKR }) => {
  const { componentName } = useContext(TrendContext);

  if (!componentName || componentName !== "TrendList") {
    return <></>;
  }
  if (selectors === "today" && selectorsKR === "오늘") {
    return (
      <div>
        {details.map((items) => (
          <div key={items.today.id}>
            <div>{items.today.id}</div>
            <div>{items.today.poster}</div>
            <div>{items.today.name}</div>
            <div>{items.today.openDate}</div>
          </div>
        ))}
      </div>
    );
  }
  if (selectors === "week" && selectorsKR === "이번 주") {
    return (
      <div>
        {details.map((items) => (
          <div key={items.week.id}>
            <div>{items.week.id}</div>
            <div>{items.week.poster}</div>
            <div>{items.week.name}</div>
            <div>{items.week.openDate}</div>
          </div>
        ))}
      </div>
    );
  }
};
export default TrendItem;
