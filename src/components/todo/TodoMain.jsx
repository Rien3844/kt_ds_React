// 기존 함수 만들던 방식
// ==> function abc (){}

import { useState } from "react";
import { StateTest } from "./stateTest.jsx";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoGrid from "./TodoGrid.jsx";

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

  const onAllDoneChangeHandler = (isDone) => {
    setCachedData((prevData) => {
      // cachedData를 반복하면서 모든 isDone의 값을 변경한다.
      const newData = prevData.map((todo) => ({ ...todo, isDone }));
      //변경된 결과를 반환한다.
      return newData;
    });
  };

  // 특정 todo의 isDone 값을 반전시키는 함수.
  // 이 함수를 TodoList에게 props로 전달.
  // TodoList는 TodoItem에게 props로 전달.
  const onDoneChangeHandler = (todoId, isDone) => {
    // 일반적인 값을 넣을 수도 있지만, 함수도 넣을 수 있음.
    // 왜 함수를 쓰는가? = parameter에 변경 이전 데이터(cachedData)를 넣어줄 예정.
    setCachedData((prevData) =>
      prevData.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
    console.log(isDone);
  };

  const onSaveButtonClickHandler = (todo, dueDate, priority) => {
    console.log("저장합니다.");
    setCachedData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, todo, dueDate, priority, isDone: false },
    ]);
  };

  // 컴포넌트가 만들어줄 HTML Tag set을 반환.
  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TodoGrid>
        <TodoHeader onAllDoneChange={onAllDoneChangeHandler} />
        <TodoList todoDatas={cachedData} onDoneChange={onDoneChangeHandler}>
          {cachedData.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDoneChange={onDoneChangeHandler}
            />
            // <TodoItemForChildren>
            //   <input id={todo.id} type="checkbox" />
            //   <label htmlFor={todo.id}>{todo.todo}</label>
            //   <span className="due-date">{todo.dueDate}</span>
            //   <span className="priority">{priorities[todo.priority]}</span>
            // </TodoItemForChildren>
          ))}
        </TodoList>
      </TodoGrid>
      <TodoAppender onSaveButtonClick={onSaveButtonClickHandler} />
    </div>
  );
};
export default TodoMain;
