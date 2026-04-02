import { useState,useRef, useCallback } from "react";
import {useEffect} from "react";
import tasksAPI from "../API/tasksAPI.js";

const UseTasks = () => {

  const [tasks, setTasks] = useState([])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want delete all Tasks?')

    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => setTasks([]))
    }
  }, [tasks])

  const deleteTask = (taskID) => {
    tasksAPI.delete(taskID)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskID)
    )
      })
  }

  const toggleTaskComplete = (taskID, isDone) => {

    tasksAPI.toggleComplete(taskID, isDone)
      .then(() => {
        setTasks(
          tasks.map((task) => {
          if (task.id === taskID) {
            return {...task, isDone}
          }

          return task
        })
    )
      })
  }

  const addTask = (title) => {
    const newTask = {
      title,
      isDone: false
    }

    tasksAPI.add(newTask).then((addedTask) => {
        setTasks([...tasks, addedTask])
        setNewTaskTitle('')
        setSearchQuery('')
        newTaskInputRef.current.focus()
      })
  }


  useEffect(() => {
    newTaskInputRef.current.focus()

   tasksAPI.getAll().then(setTasks)
  }, [])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null


  return {
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
}
}

export default UseTasks