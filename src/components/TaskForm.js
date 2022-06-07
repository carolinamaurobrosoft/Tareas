import React, { useState } from "react";
import'../stylesheet/TaskForm.css'; 
import { v4  as uuidv4} from 'uuid';
//recibe una nueva funcion que me permite agregar una tarea
function TaskForm(props){

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value); //extraer el campo de texto
  }

  const handleSubmission = e => {
    e.preventDefault(); 
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask); //va a ser una función que la reciba en los props
  }

  return(
      <form 
        className="task-form"
        onSubmit={handleSubmission}>
        <input
          className="task-input"
          type="text"
          placeholder="Escribe una Tarea"
          name="text"
          onChange={handleChange}
        />
        <button className="task-button">
          Agregar Tarea
        </button>
      </form>
  );

}

export default TaskForm;