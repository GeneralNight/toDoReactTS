import {CheckCircle, Circle, Trash} from '@phosphor-icons/react'
import styles from './styles.module.css'

export type Task = {
    id: number;
    done: boolean;
    content: string;
}

interface TasksListProps {
    tasks: Task[];
    onDeleteTask: (taskId: number) => void
    onChangeTaskState: (taskId: number) => void
}

export function TasksList({tasks, onDeleteTask, onChangeTaskState}:TasksListProps) {

    const handleDeleteTask = (taskId: number) => {
        onDeleteTask(taskId)
    }

    const handleTaskState = (taskId: number) => {
        onChangeTaskState(taskId)
    }

    return (
        <div className={styles.tasksList}>
            {
                tasks.map(task => {
                    return (
                        <div className={[styles.task, task.done ? styles.doneTask : styles.toDoTask].join(" ")} key={task.id}>
                            <button className={task.done ? styles.btnDoneTask : styles.btnToDoTask} onClick={() => handleTaskState(task.id)}>
                                {
                                    task.done ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />
                                }
                            </button>
                            <p onClick={() => handleTaskState(task.id)}>{task.content}</p>
                            <button className={styles.removeTask} onClick={()=>{handleDeleteTask(task.id)}}>
                                <Trash size={24} />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}