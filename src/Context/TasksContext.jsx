import { createContext } from "react";
import UseTasks from "../hooks/UseTasks.js";
import UseInCompleteTaskScroll from "../hooks/UseInCompleteTaskScroll.js";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
  const {children} = props

  const {
    tasks,
    filteredTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    addTask,
    newTaskInputRef,
    disappearingTaskId,
    appearingTaskId,
  } = UseTasks()

const {firstInCompleteTaskId,
  firstInCompleteTaskRef} = UseInCompleteTaskScroll(tasks)

  return (
    <TasksContext.Provider
      value = {{
        tasks,
        filteredTasks,
        firstInCompleteTaskId,
        firstInCompleteTaskRef,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,

        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        addTask,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}