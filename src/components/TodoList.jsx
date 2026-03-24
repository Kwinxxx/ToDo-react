import ToDoItem from "./ToDoItem.jsx";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
    filteredTasks,
    firstInCompleteTaskId,
    firstInCompleteTaskRef,
  } = props

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return (
      <div className="todo__empty-message">There are no tasks yet</div>
    )
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return (
      <div className="todo__empty-message">Tasks not found</div>
    )
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem
          className = "todo__item"
          key = {task.id}
          ref={task.id === firstInCompleteTaskId ? firstInCompleteTaskRef : null}
          onDeleteTaskButtonClick = {onDeleteTaskButtonClick}
          onTaskCompleteChange = {onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList