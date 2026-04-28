const TrendBox = ({ children, selectors, items }) => {
  const providerProps = {
    componentName: "TrendBox",
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
