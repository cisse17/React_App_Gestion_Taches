import styles from "./taskItem.module.css"
const TaskItem = ({task, editTask, deleteTask}) => {


  return (
   <li className={`${styles.container} ${task?.completed ? styles.succes : styles.default}`}
   onClick={() => editTask(task.id, !task.completed)}
   >
        <div className={styles.item}>
            <div className={`${styles.id} ${styles.idDefault}`}>
                {task.id}
            </div>
            <div className={styles.contentDefault}>
              {task.title}
            </div>
        </div>
        <button className="button-primary" onClick={deleteTask}>x</button>
   </li>
  )
}

export default TaskItem
