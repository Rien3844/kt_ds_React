import { useContext, useRef } from "react";
import { TodoContext } from "./contexts/TodoContext.jsx";

const TodoItem = ({ id, priorities }) => {
  useContext(TodoContext);

  // props todo의 이름과 todo.todo의 이름이 같아 객체 구조 분해 불가.
  // todo.todo의 이름을 todoTask로 변경해 할당.

  const { getTodo, done } = useContext(getTodo);
  const { id: todoId, todo: todoTask, dueDate, priority, isDone } = getTodo(id);

  const todoItemConfirmRef = useRef();
  const checkboxRef = useRef();

  const doneClass = isDone ? "done" : "";

  const onDoneChangeHandler = () => {
    done(todoId, !checkboxRef.current.checked);
    // onDoneChange(todo.id, !todo.isDone);
    // input type="checkbox"에 checked가 props로 할당되어 변경된 체크 상태를 가져올 수 없음.
    // 원래의 체크 상태를 가져와 반전시키면 된다.
    // 나중에 useEffect를 사용하면 변경 가능.
    // onDoneChange(todo.id, !checkboxRef.current.checked);
    done(todoId, !checkboxRef.current.checked);
  };

  const onConfirmOkClickHandler = () => {
    console.log(">", checkboxRef.current.checked);
    // onDoneChange(todo.id, !todo.isDone);
    // input type="checkbox"에 checked가 props로 할당되어 변경된 체크 상태를 가져올 수 없음.
    // 원래의 체크 상태를 가져와 반전시키면 된다.
    // 나중에 useEffect를 사용하면 변경 가능.
    // onDoneChange(todo.id, !checkboxRef.current.checked);
    done(todoId, !checkboxRef.current.checked);
  };

  const onConfirmCloseClickHandler = () => {};
  return (
    <li className="task-item">
      <Confirm
        dialogRef={todoItemConfirmRef}
        onOkClick={onConfirmOkClickHandler}
        onCloseClick={onConfirmCloseClickHandler}
      />
      <input
        id={todoId}
        type="checkbox"
        checked={isDone}
        ref={checkboxRef}
        onChange={onDoneChangeHandler}
      />
      <label className={doneClass} htmlFor={id}>
        {todoTask}
      </label>
      <span className={`due-date ${doneClass}`}>{dueDate}</span>
      <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
    </li>
  );
};

export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li className="tasks-item">{children}</li>;
};

export const abc = "123123";
