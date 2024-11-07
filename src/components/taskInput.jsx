import styles from './taskInput.module.css';
const TaskInput = () => {
  return (
    <div className={`box ${styles.element}`} >
      <h2 className={styles.title}> Ajouter une tache</h2>
      <form className={styles.container}>
        <input type='text'
        className={styles.input}
        placeholder = "Indiquez un titre de tâche explicite."
          />

          
        <button className='button-primary' type='submit'>
          Ajouter
        </button>
      </form>

    </div>
  )
}

export default TaskInput
