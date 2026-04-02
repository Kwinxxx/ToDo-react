import {useContext, useRef} from "react";
import {TasksContext} from "../../Context/TasksContext.jsx";
import RouterLink from "../RouterLink/RouterLink.jsx";
import styles from './TodoItem.module.scss';

const ToDoItem = (props) => {
  const {
    className = '',
    title,
    isDone,
    id,
  } = props

  const {
    firstInCompleteTaskId,
    firstInCompleteTaskRef,
    deleteTask,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
  } = useContext(TasksContext)



  return (
    <li className={
      `${disappearingTaskId === id ? styles.isDisappearing : ''} 
       ${className} 
       ${styles.item}
       ${appearingTaskId === id ? styles.isAppearing : ''}
       `}
        ref={id === firstInCompleteTaskId ? firstInCompleteTaskRef : null}
    >
          <input
            className={styles.checkbox}
            id={id}
            type="checkbox"
            checked={isDone}
            onChange={({target}) => toggleTaskComplete(id, target.checked)}
          />
          <label
            className={`${styles.label} visually-hidden`}
            htmlFor={id}
          >
            {title}
          </label>

          <RouterLink to={`/tasks/${id}`} aria-label="Task Detail Page">
            {title}
          </RouterLink>
      
          <button
            className={styles.deleteButton}
            aria-label="Delete"
            title="Delete"
            onClick={() => deleteTask(id)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
  )
}

export default ToDoItem