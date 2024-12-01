
import styles from "./footer.module.css"
const Footer = ({completedTasks}) => {
  if(completedTasks){
    return (
      <footer>
          <code className={styles.footer}>
              Avec TaskFlow vous avez éliminé {completedTasks} tache
              {completedTasks > 1 ? "s" : ""} !
          </code>
      </footer>
    
    );

  }
  // return <></> or
  return null;
  
};

export default Footer
