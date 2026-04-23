const TodoItem = (todo, priorities) => {
  // props todo의 이름과 todo.todo의 이름이 같아 객체 구조 분해 불가.
  // todo.todo의 이름을 todoTask로 변경해 할당.
  const { id, todo: todoTask, dueDate, priority } = todo;
  return (
    <li className="task-item">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{todoTask}</label>
      <span className="due-date">{dueDate}</span>
      <span className="priority">{priorities[priority]}</span>
    </li>
  );
};

export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li className="task-item">{children}</li>;
};
