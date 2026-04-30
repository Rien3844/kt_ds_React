/** @format */

import { memo, useRef, useState } from "react";
import { Alert } from "../ui/Modal.jsx";
import { fetchAddTodo, fetchTodoList } from "../../http/todo/fetchTodo.js";
import { useDispatch } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice.js";

const TodoAppender = memo(() => {
  console.log("TodoAppender");

  // Component Rendering을 Delay
  // for (let i = 1; i <= 100000; i++) {
  //   console.log(i);
  // }

  const [isFetching, setIsFetching] = useState(false);

  const todoAlertRef = useRef();

  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const reactReduxDispatcher = useDispatch();

  const onSaveButtonClickHandler = async () => {
    if (!taskRef.current.value) {
      todoAlertRef.current.showModal("TODO를 입력하세요.");
      return;
    }
    if (!dueDateRef.current.value) {
      todoAlertRef.current.showModal("완료 날짜를 선택하세요.");
      return;
    }
    if (!priorityRef.current.value) {
      todoAlertRef.current.showModal("우선순위를 선택하세요.");
      return;
    }

    // 게시글 추가할 때 낙관적 업데이트를 한다 ==> 이때 게시글의 PK값을 알 수 없다.
    // id(PK)가 없는 값이니
    // PK를 만들어야하는 경우에는 낙관적 업데이트를 하면 안된다.
    // reactReduxDispatcher({
    //   type: "todo-add",
    //   payload: {
    //     task: taskRef.current.value,
    //     dueDate: dueDateRef.current.value,
    //     priority: priorityRef.current.value,
    //   },
    // });

    setIsFetching(true);
    const addResult = await fetchAddTodo(
      taskRef.current.value,
      dueDateRef.current.value,
      priorityRef.current.value,
    );
    setIsFetching(false);

    if (addResult.errors) {
      alert(addResult.errors);
    }
    const fetchResult = await fetchTodoList();
    reactReduxDispatcher(todoAction.refresh(fetchResult.body));

    taskRef.current.value = "";
    dueDateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <footer>
      <Alert dialogRef={todoAlertRef} />
      <input type="text" placeholder="Input new task" ref={taskRef} />
      <input type="date" ref={dueDateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button
        type="button"
        disabled={isFetching}
        onClick={onSaveButtonClickHandler}
      >
        {isFetching ? "저장중...." : "저장"}
      </button>
    </footer>
  );
});
export default TodoAppender;
