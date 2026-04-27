import { useRef } from "react";

const TodoAppender = ({ onSaveButtonClick }) => {
  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const onSaveButtonClickHandler = () => {
    onSaveButtonClick(
      taskRef.current.value,
      dueDateRef.current.value,
      priorityRef.current.value,
    );

    taskRef.current.value = "";
    dueDateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <footer>
      <input type="text" placeholder="Input new task" ref={taskRef} />
      <input type="date" ref={dueDateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={onSaveButtonClickHandler}>
        Save
      </button>
    </footer>
  );
};

export default TodoAppender;
