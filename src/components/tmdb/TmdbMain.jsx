import { useState } from "react";
import TrendBox from "./trend/TrendBox.jsx";
import TrendHeader from "./trend/TrendHeader.jsx";
import TrendItem from "./trend/TrendItem.jsx";
import TrendList from "./trend/TrendList.jsx";
import TrendSelectors from "./trend/TrendSelectors.jsx";
import trendData from "./trend/trend.json";

const TmdbMain = () => {
  const [{ sectionName, selectorsKR, items }] = useState(trendData);
  const [selectors, setSelectors] = useState("today");

  return (
    <TrendBox
      selectors={selectors}
      setSelectors={setSelectors}
      selectorsKR={selectorsKR}
      items={items}
    >
      <TrendHeader>
        <h1>{sectionName}</h1>
        <TrendSelectors />
      </TrendHeader>
      <TrendList>
        <TrendItem />
      </TrendList>
    </TrendBox>
  );
};

export default TmdbMain;
