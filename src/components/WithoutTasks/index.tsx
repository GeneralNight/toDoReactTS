import {ClipboardText} from '@phosphor-icons/react'
import styles from './styles.module.css'

export function WithoutTasks() {
    return (
        <div className={styles.withoutTask}>
            <ClipboardText size={56} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
        </div>
    )
}