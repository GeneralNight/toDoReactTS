import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"

import './assets/css/global.css'
import styles from './App.module.css'
import { TasksStats } from "./components/TasksStats"
import { WithoutTasks } from "./components/WithoutTasks"
import { Task, TasksList } from "./components/TasksList"
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {id:1,done: false, content: "Estudar React"},
    {id:2,done: false, content: "Estudar React 2"},
    {id:3,done: true, content: "Estudar React 3"},
    {id:4,done: true, content: "Estudar React 4"},
  ])

  const handleNewTask = (task:string) => {
    const newTask : Task = {
      id: tasks.length + 1,
      done: false,
      content: task
    }
    setTasks([newTask, ...tasks])
  }

  const handleDeleteTask = (taskId: number) => {
    const tasksToUpdate = tasks.filter(task => task.id !== taskId).map((task,index)=>{
      return {
        ...task,
        id: index + 1
      }
    })
    setTasks(tasksToUpdate)
  }

  const handleTaskState = (taskId: number) => {
    const tasksToUpdate = tasks.map((task) => {
      if (task.id !== taskId) return task
      return {
        ...task,
        done: !task.done
      }
    })
    setTasks(tasksToUpdate)
  }

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main>
        <AddTask onCreateNewTask={(newTask:string) => handleNewTask(newTask)}/>
        <TasksStats tasks={tasks}/>
        {
          !tasks.length ?
          <WithoutTasks/> : <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} onChangeTaskState={handleTaskState}/>
        }
      </main>
    </div>
  )
}

export default App
