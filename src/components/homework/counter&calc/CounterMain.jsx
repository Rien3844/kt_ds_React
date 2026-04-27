import { useState } from "react";

const CounterMain = () => {
  const [count, setCount] = useState(0);

  const onButtonClickHandler = (event) => {
    const className = event.target.classList.value;

    setCount((prevCount) => {
      if (className.includes("decrease")) {
        if (prevCount === 0) {
          return prevCount;
        }
        return prevCount - 1;
      } else if (className.includes("increase")) {
        if (prevCount === 100) {
          return prevCount;
        }
        return prevCount + 1;
      }

      return prevCount;
    });
  };

  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="counterGroup">
        <button
          className="plusButton decrease negative"
          type="button"
          onClick={onButtonClickHandler}
        >
          -
        </button>
        <div className="countNum">{count}</div>
        <button
          className="minusButton increase"
          type="button"
          onClick={onButtonClickHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterMain;
