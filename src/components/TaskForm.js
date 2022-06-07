import React from "react";
import'../stylesheet/TaskForm.css';
//recibe una nueva funcion que me permite agregar una tarea
function TaskForm(props){
  return(
      <form className="task-form">
        <input
          className="task-input"
          type="text"
          placeholder="Escribe una Tarea"
          name="text"
        />
        <button className="task-button">
          Agregar Tarea
        </button>
      </form>
  );

}

export default TaskForm;