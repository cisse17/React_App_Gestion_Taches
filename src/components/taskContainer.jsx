
// import Header from "../header/header";
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import TaskInput from "./taskInput";
import TaskList from "./taskList";
// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité de taches
export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([]);

const addTask = (title) =>{
  const newTask = {
    // id : tasksList.length + 1,
    id : tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
    title: title,
    completed : false,

  }
  setTasksList([...tasksList, newTask]);
};

const editTask = (id, completedValue) => {
setTasksList(
  tasksList.map((task) =>
    task.id === id ? {...task, completed : completedValue } : task
  )
);
};

const deleteTask = (id)=> {
  setTasksList(tasksList.filter((task) => task.id !== id));
}


const getTaskCounts = () => {
  // const completedTasks= tasksList.filter((task) => task.completed === true) l'idéé c faire un array avec uniquement des taches qui sont complétes et ns avons besion de connaitre la taille de l'array avec length
  const completedTasks= tasksList.filter((task) => task.completed).length
  const incompletedTasks = tasksList.length - completedTasks;
  
  return{
    completedTasks,
    incompletedTasks
  }
}

const {completedTasks, incompletedTasks} = getTaskCounts();
console.log(completedTasks, incompletedTasks)

return (
    <main>
       <Header/>
       <TaskInput addTask={addTask}/> 
       <TaskList
        // ce component s'occupe à lui seul tous ces props qu'on l'a passé
       tasksList={tasksList} 
       editTask={editTask}
       deleteTask={deleteTask}
       incompletedTasks={incompletedTasks}
       />
       <Footer completedTasks={completedTasks}/>
    </main>
  );
};


