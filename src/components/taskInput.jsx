import { useState } from 'react';
import styles from './taskInput.module.css';
const TaskInput = ({addTask}) => {
  const [taskTitle, setTaskTitle] = useState("");
  
  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setTaskTitle(e.target.value);

  };

  const handleAddTask = (e)=> {
    // e.preventDefault();
    // addTask(taskTitle);
    // setTaskTitle("");
    e.preventDefault();
    if(taskTitle.trim()){
      addTask(taskTitle);
      setTaskTitle(""); // réinitialiser notre valeur à 0
    }
 
  };

  return (
    <div className={`box ${styles.element}`} >
      <h2 className={styles.title}> Ajouter une tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>

        <input 
        type='text'
        className={styles.input}
        placeholder = "Indiquez un titre de tâche explicite."
        onChange={handleInputChange} 
        value={taskTitle}
          />

          
        <button className='button-primary' type='submit'>
          Ajouter
        </button>
      </form>

    </div>
  )
}

export default TaskInput
