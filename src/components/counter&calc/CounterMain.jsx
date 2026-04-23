import { useState } from "react";

const CounterMain = () => {
  const [count, setCount] = useState(0);

  // +버튼
  const onPlusButtonClickHandler = () => {
    setCount((prev) => {
      if (prev < 100) {
        return prev + 1;
      }
      return prev;
    });
  };

  // -버튼
  const onMinusButtonClickHandler = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="counterGroup">
        <button
          className="plusButton"
          type="button"
          onClick={onMinusButtonClickHandler}
        >
          -
        </button>
        <div className="countNum">{count}</div>
        <button
          className="minusButton"
          type="button"
          onClick={onPlusButtonClickHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterMain;
