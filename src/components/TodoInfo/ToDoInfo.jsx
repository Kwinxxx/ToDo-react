import { memo, useContext } from 'react';
import { TasksContext } from "../../Context/TasksContext.jsx";

const ToDoInfo = (props) => {
  const { styles } = props
  const {
    tasks,
    deleteAllTasks,
    done,
  } = useContext(TasksContext)


  const total = tasks.length
  const hasTasks = total > 0

  return (
    <div className={styles.info}>
      <div className="todo__total-tasks">Done {done} from {total}</div>
      {hasTasks && (
        <button
          className={styles.deleteAllButton}
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