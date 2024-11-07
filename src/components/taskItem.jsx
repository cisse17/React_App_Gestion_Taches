import { useState } from "react"
import styles from "./taskItem.module.css"
const TaskItem = () => {
    const [todos, setTodos] = useState(0)


  return (
   <li className={`${styles.container} ${styles.default}`}>
        <div className={styles.item}>
            <div className={`${styles.id} ${styles.idDefault}`}>
                1
            </div>
            <div className={styles.contentDefault}>
              Ranger mon bureau et finir dapprendre react
            </div>
        </div>
        <button className="button-primary">x</button>
   </li>
  )
}

export default TaskItem
