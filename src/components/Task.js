import React from "react";
import '../stylesheet/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task( { id, text, completed, completeTask, delateTask } ){
  return (
    <div className={ completed ? "task-container completed" : "task-container"}>
      <div 
        className="task-text"
        onClick={() => completeTask(id) }
      >
        { text }
      </div>
      <div 
        className="task-icon-container"
        onClick={() => delateTask(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
        
}

export default Task;