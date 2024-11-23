import TaskItem from "./taskItem"
import styles from "./taskList.module.css"

const TaskList = ({
  tasksList, 
  editTask, 
  deleteTask,
  incompletedTasks,
}) => {


  const taskList = tasksList.map((task) => (
    <TaskItem 
    key={task.id} 
    task={task} 
    editTask={editTask} 
    deleteTask={deleteTask} />
  )
 
  )

  return (
    <div className="box">
        <h2 className={styles.title}>
            Il te reste encore {incompletedTasks} tâche à accomplir !
        </h2>
        {/* si taskList existe et est superieur a 0 (est ce y'a au minimun une tache) alors on boucle pr afficher l'element ds ntre ul */}
        {tasksList && tasksList.length > 0 && (
           <ul className={styles.container}>
           {taskList}
          </ul>
            
          )}
       
      
    </div>
  )
}

export default TaskList
