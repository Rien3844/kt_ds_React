import { useState } from "react";

const CalcMain = () => {
  // const [a, setA] = useState(0);
  // const [b, setB] = useState(0);
  // const [calc, setCalc] = useState(0);
  const [{ a, b, calc }, setNums] = useState({
    a: 10,
    b: 20,
    calc: 30,
  });

  // const onAValueChangeHandler = (event) => {
  //   setA(event.target.value);
  //
  //   console.log(a);
  // };
  // const onBValueChangeHandler = (event) => {
  //   setB(event.target.value);
  //   console.log(b);
  // };
  //
  // // 형변환 안해주니 string값으로 계산이됨
  // const onPlusCalcClickHandler = () => {
  //   setCalc(Number(a) + Number(b));
  // };
  // const onMinusCalcClickHandler = () => {
  //   setCalc(a - b);
  // };
  // const onmultiplyCalcClickHandler = () => {
  //   setCalc(a * b);
  // };
  // const onDivideCalcClickHandler = () => {
  //   setCalc(a / b);
  // };

  const onFirstNumKeyUpHandler = (event) => {
    // setFirstNum(parseInt(event.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, firstNum: parseInt(event.target.value) };
      return newNums;
    });
  };

  const onSecondNumKeyUpHandler = (event) => {
    // setSecondNum(parseInt(event.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, secondNum: parseInt(event.target.value) };
      return newNums;
    });
  };

  const onCalcButtonClickHandler = (operator) => {
    let resultNum = 0;
    if (operator === "+") {
      resultNum = a + b;
    } else if (operator === "-") {
      resultNum = a - b;
    } else if (operator === "x") {
      resultNum = a * b;
    } else if (operator === "/") {
      resultNum = a / b;
    }
    setNums((prevNums) => {
      const newNums = { ...prevNums, resultNum: resultNum };
      return newNums;
    });
  };

  return (
    <div className="calculator">
      <h1>Calc</h1>
      <div className="calcGroup">
        <input
          type="number"
          className="inputNum"
          value={a}
          onChange={onFirstNumKeyUpHandler}
        />
        <div className="buttonGroup">
          <button
            type="button"
            className="calcButton"
            onClick={onCalcButtonClickHandler.bind(this, "+")}
          >
            +
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onCalcButtonClickHandler.bind(this, "-")}
          >
            -
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onCalcButtonClickHandler.bind(this, "*")}
          >
            *
          </button>
          <button
            type="button"
            className="calcButton"
            onClick={onCalcButtonClickHandler.bind(this, "/")}
          >
            /
          </button>
        </div>
        <input
          type="number"
          className="inputNum"
          value={b}
          onChange={onSecondNumKeyUpHandler}
        />
        <div className="equalPattern">=</div>
        <div className="resultValue">{calc}</div>
      </div>
    </div>
  );
};

export default CalcMain;
