import { PlusCircle } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface AddTaskProps {
    onCreateNewTask: (newTask:string) => void
}

export function AddTask({onCreateNewTask}: AddTaskProps) {

    const [newTaskText, setNewTaskText] = useState('')

    const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onCreateNewTask(newTaskText)
        setNewTaskText('')
    }

    return (
        <div className={styles.addTask}>
            <form onSubmit={handleNewTask}>
                <input type="text" value={newTaskText} onChange={(e)=>setNewTaskText(e.target.value)} placeholder="Adicione uma nova tarefa"/>
                <button disabled={!newTaskText.length}>Criar <PlusCircle size={16}/></button>
            </form>
        </div>
    )
}