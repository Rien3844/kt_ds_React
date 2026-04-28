import TrendContext from "./contexts/TrendContext.jsx";

const TrendBox = ({
  children,
  selectors,
  setSelectors,
  selectorsKR,
  items,
}) => {
  const providerProps = {
    componentName: "TrendBox",
    selectors,
    setSelectors,
    selectorsKR,
    items,
  };
  return (
    <ul className="tasks">
      <TrendContext.Provider value={providerProps}>
        {children}
      </TrendContext.Provider>
    </ul>
  );
};

export default TrendBox;
