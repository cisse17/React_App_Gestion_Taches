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

  if(taskList && taskList.length > 0){
    return (
    <div className="box">
     
    <h2 className={styles.title}>
        {incompletedTasks > 0 && (
          <> 🗎 Il te reste encore <span className="important">{incompletedTasks}</span> tâche à accomplir !</>
      
        )}   

        {incompletedTasks === 0 && (
            <>🤝 Génial, tu as accompli toutes tes tâches </>
        )}
   </h2>
        {/* si taskList existe et est superieur a 0 (est ce y'a au minimun une tache) alors on boucle pr afficher l'element ds ntre ul */}
        {tasksList && tasksList.length > 0 && (
           <ul className={styles.container}>
           {taskList}
          </ul>
            
          )}         
    </div>
  );
}
return (
  <div className="box">
    <h2 className={styles.emptyState}>
    👋 salut, tu n&apos;as rien à faire aujourd&apos;hui ! profite de ton temps libre 
    </h2>
  </div>
);
}


export default TaskList
