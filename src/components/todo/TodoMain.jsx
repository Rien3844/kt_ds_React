// 기존 함수 만들던 방식
// ==> function abc (){}

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
      prioritiy: 1,
    },

    {
      id: "todo_2",
      todo: "React Component Master2",
      dueDate: "2026-04-23",
      prioritiy: 2,
    },

    {
      id: "todo_3",
      todo: "React Component Master3",
      dueDate: "2026-04-24",
      prioritiy: 3,
    },
  ];

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
      <header>React Todo</header>
      <ul className="tasks">
        <TodoHeader />
        <TodoList todoDatas={todoDatas} />
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
