import { useContext } from 'react'

import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";
import Button from "./Button.jsx";
import {TasksContext} from "../Context/TasksContext.jsx";


const Todo = () => {
  const { firstInCompleteTaskRef } = useContext(TasksContext)

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo />
      <Button
        onClick={() => firstInCompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >Show first incomplete task</Button>
      <TodoList />
    </div>
  )
}

export default Todo