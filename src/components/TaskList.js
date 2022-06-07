import React, {useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheet/TaskList.css'
import Task from "./Task"

function TaskList(){

  //estado va a ser una listade tareas
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()){ //probar que no este vacia, le saco espacios al principio y final
        task.text = task.text.trim();
        //agregro la tarea a la lista de tareas que ya tenia
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
    }
  }

  const delateTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  }

  

  return(
    <>
      <TaskForm onSubmit={addTask}/> 
      <div className="tasks-list-container">
        {
          tasks.map( (task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text} 
              completed={task.completed}
              delateTask={delateTask}
            />          
          )
        }
      </div>
    </>
  );
}

export default TaskList;