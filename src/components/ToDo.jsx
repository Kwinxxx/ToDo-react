import { useState, useRef, useEffect } from 'react'

import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";



const Todo = () => {

  const[tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }
    return []
  })
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want delete all Tasks?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskID) => {
    setTasks(
      tasks.filter((task) => task.id !== taskID)
    )
  }

  const toggleTaskComplete = (taskID, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskID) {
          return {...task, isDone}
        }

        return task
      })
    )
  }

  const filterTasks = (query) => {
    console.log(`Поиск  - ${query}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString,
        title: newTaskTitle,
        isDone: false
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }


  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
      addTask = {addTask}
      newTaskTitle = {newTaskTitle}
      setNewTaskTitle = {setNewTaskTitle}
      />
      <SearchTaskForm
      onSearchInput = {filterTasks}
      />
      <ToDoInfo
      total={tasks.length}
      done={tasks.filter((task) => task.isDone).length}
      onDeleteAllButtonClick = {deleteAllTasks}
      />
      <TodoList tasks={tasks}
      onDeleteTaskButtonClick = {deleteTask}
      onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
  )
}

export default Todo