import { useState } from "react";

// Component라 부르지만 엄밀히 보면 함수임.
export const StateTest = () => {
  console.log("StateTest Component(함수) 실행됨.");
  // 변경 가능한 상수를 생성
  // 첫번째 = 상태값, 두번째 = 바꿀값
  // 관례상 앞이 value면 두번째거는 setValue로 쓴다.
  // props = 변경불가능 data, state는 변경가능 data
  const [value, setValue] = useState("Initiate Value");

  const onTextKeyUpHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return <StateTestItem text={value} onTextKeyUp={onTextKeyUpHandler} />;
};

const StateTestItem = ({ text, onTextKeyUp }) => {
  console.log("StateTestItem Component(함수) 실행됨.");
  return (
    <div>
      {text}
      <div>
        <input type="text" onKeyUp={onTextKeyUp} />
      </div>
    </div>
  );
};
