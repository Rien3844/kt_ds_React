// 기존 함수 만들던 방식
// ==> function abc (){}

import { useState } from "react";
import { StateTest } from "./stateTest.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";

// ecma function (fat arrow function)
// ecma에서의 함수 만드는 방식
// const : 상수를 정의하는 키워드.
// (parameter) => { function body } ==> fat arrow function
// const abc = () => {};

// 일반 function과 fat arrow function의 기능적 차이.
// function == 함수를 호출한 대상을 this 객체로 알 수 있다.
// fat arrow function == this 키워드 사용 불가.
// => 함수를 호출한 대상을 알 수 없다? X ==> event 파라미터로만 알 수 있음.

// const 에러 나는 이유?
// ==> export default 이후에 const 키워드가 나타날 수 없음.(규칙)
// export default const TodoMain = () => {}
const TodoMain = () => {
  // const ==> 상수를 정의
  // let ==> 변수를 정의
  // TODO JSON DATA
  // 각각의 item을 배열내부의 객체로 표현
  const todoDatas = [
    {
      id: "todo_1",
      todo: "React Component Master",
      dueDate: "2026-04-22",
      priority: 1,
      isDone: true,
    },

    {
      id: "todo_2",
      todo: "React Component Master2",
      dueDate: "2026-04-23",
      priority: 2,
      isDone: false,
    },

    {
      id: "todo_3",
      todo: "React Component Master3",
      dueDate: "2026-04-24",
      priority: 3,
      isDone: false,
    },
  ];

  const [cachedData, setCachedData] = useState(todoDatas);

  // 특정 todo의 isDone 값을 반전시키는 함수.
  // 이 함수를 TodoList에게 props로 전달.
  // TodoList는 TodoItem에게 props로 전달.
  const onDoneChangeHandler = (todoId) => {
    // 일반적인 값을 넣을 수도 있지만, 함수도 넣을 수 있음.
    // 왜 함수를 쓰는가? = parameter에 변경 이전 데이터(cachedData)를 넣어줄 예정.
    setCachedData((prevData) => {
      // TODO : [...prevData]에 대해서
      const newStateMemory = [...prevData];

      // java for each 와 같은 형태의 문법
      for (const todo of newStateMemory) {
        if (todo.id === todoId) {
          // TODO : !todo.isDone => true로 바꾼이유
          todo.isDone = true;
          break;
        }
      }
      // cashedData를 가져와 값을 바꿧으니, cachedData를 바뀐 값으로 바꿔줘라. ==> return prevData;
      // 안바뀌는 이유? : cachedData를 바꿔 메모리안 데이터는 바뀌었지만 메모리 주소(배열)는 바뀌지 않았다.
      // ==> React는 메모리 주소(배열)가 바뀌지않으면 바꾸지 않았다고 판단한다. = 메모리 주소(배열)를 바꿔줘야함.
      // [...prevData] = 데이터를 새로운 메모리 주소(배열)를 만들어 다른 메모리 주소(배열)로 넣어준다.
      return newStateMemory;
    });

    console.log(todoId, todoDatas);
  };

  const onTaskKeyUpHandler = (event) => {
    console.log(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const onSaveButtonClickHandler = () => {
    console.log("저장합니다.");
  };

  const onPrioritySelectChangeHandler = (event) => {
    console.log(event.target.value);
  };

  // 컴포넌트가 만들어줄 HTML Tag set을 반환.
  return (
    <div className="wrapper">
      <div>
        <StateTest />
      </div>
      <header>React Todo</header>
      <ul className="tasks">
        <TodoHeader />
        <TodoList todoDatas={cachedData} onDoneChange={onDoneChangeHandler} />
      </ul>
      <TodoAppender
        onTaskKeyUp={onTaskKeyUpHandler}
        onDateChange={onDateChangeHandler}
        onSaveButtonClick={onSaveButtonClickHandler}
        onPrioritySelectChange={onPrioritySelectChangeHandler}
      />
    </div>
  );
};
export default TodoMain;
