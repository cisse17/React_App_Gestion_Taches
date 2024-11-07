import TaskItem from "./taskItem"
import styles from "./taskList.module.css"

const TaskList = () => {
  return (
    <div className="box">
        <h2 className={styles.title}>
            Il te reste encore x tâche à accomplir !
        </h2>
        <ul className={styles.container}>
           <TaskItem/>
        </ul>
      
    </div>
  )
}

export default TaskList
