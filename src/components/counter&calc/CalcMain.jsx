import { useState } from "react";

const CalcMain = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [calc, setCalc] = useState(0);

  const onAValueChangeHandler = (event) => {
    setA(event.target.value);

    console.log(a);
  };
  const onBValueChangeHandler = (event) => {
    setB(event.target.value);
    console.log(b);
  };

  // 형변환 안해주니 string값으로 계산이됨
  const onPlusCalcClickHandler = () => {
    setCalc(Number(a) + Number(b));
  };
  const onMinusCalcClickHandler = () => {
    setCalc(a - b);
  };
  const onmultiplyCalcClickHandler = () => {
    setCalc(a * b);
  };
  const onDivideCalcClickHandler = () => {
    setCalc(a / b);
  };

  return (
    <div className="calculator">
      <h1>Calc</h1>
      <div className="calcGroup">
        <input
          type="number"
          className="inputNum"
          value={a}
          onChange={onAValueChangeHandler}
        />
        <div className="buttonGroup">
          <button
            type="button"
            className="calcButton"
            onClick={onPlusCalcClickHandler}
          >
            +
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onMinusCalcClickHandler}
          >
            -
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onmultiplyCalcClickHandler}
          >
            *
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onDivideCalcClickHandler}
          >
            /
          </button>
        </div>
        <input
          type="number"
          className="inputNum"
          value={b}
          onChange={onBValueChangeHandler}
        />
        <div className="equalPattern">=</div>
        <div className="resultValue">{calc}</div>
      </div>
    </div>
  );
};

export default CalcMain;
