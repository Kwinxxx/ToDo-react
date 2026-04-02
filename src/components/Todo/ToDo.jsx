import { useContext } from 'react'

import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm.jsx";
import ToDoInfo from "../TodoInfo/ToDoInfo.jsx";
import TodoList from "../Todolist/TodoList.jsx";
import Button from "../Button/Button.jsx";
import {TasksContext} from "../../Context/TasksContext.jsx";

import styles from './Todo.module.scss'


const Todo = () => {
  const { firstInCompleteTaskRef } = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles}/>
      <SearchTaskForm styles={styles}/>
      <ToDoInfo styles={styles}/>
      <Button
        onClick={() => firstInCompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >Show first incomplete task</Button>
      <TodoList styles={styles}/>
    </div>
  )
}

export default Todo