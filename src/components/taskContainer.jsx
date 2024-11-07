
// import Header from "../header/header";
import Header from "./header";
import TaskInput from "./taskInput";
import TaskList from "./taskList";
// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité de taches
export const TaskContainer = () => {
  return (
    <main>
       <Header/>
       <TaskInput/> 
       <TaskList/>
    </main>
  );
};


