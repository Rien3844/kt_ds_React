import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendItem = () => {
  const { componentName, selectors, items } = useContext(TrendContext);

  if (!componentName || componentName !== "TrendList") {
    return <></>;
  }

  const seletedItems = items[selectors];

  return (
    <div className="trend-items">
      {seletedItems.map((item) => (
        <div key={item.id} className="trend-item">
          <div>{item.id}</div>
          <div>
            <img src={item.poster} />
          </div>
          <div>{item.name}</div>
          <div>{item.openDate}</div>
        </div>
      ))}
    </div>
  );
};
export default TrendItem;
