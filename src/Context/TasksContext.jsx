import { useState,useRef, useCallback, createContext } from "react";
import {useEffect} from "react";
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
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}