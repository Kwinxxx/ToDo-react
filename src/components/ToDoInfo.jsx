import { memo, useContext } from 'react';
import { TasksContext } from "../Context/TasksContext.jsx";

const ToDoInfo = () => {
  const {
    tasks,
    deleteAllTasks,
    done,
  } = useContext(TasksContext)


  const total = tasks.length
  const hasTasks = total > 0

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Done {done} from {total}</div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  )
}

export default memo(ToDoInfo)