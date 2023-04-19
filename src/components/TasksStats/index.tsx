

import { Task } from '../TasksList'
import styles from './styles.module.css'

interface TasksStatsProps {
    tasks: Task[]
}

export function TasksStats({tasks}:TasksStatsProps) {

    const doneTasksCount = tasks.filter(task=>task.done).length

    return (
        <div className={styles.tasksStats}>
            <div className={styles.stats}>
                <p>Tarefas criadas</p>
                <span>{tasks.length}</span>
            </div>
            <div className={styles.stats}>
                <p>Concluídas</p>
                <span>{doneTasksCount} de {tasks.length}</span>
            </div>
        </div>
    )
}