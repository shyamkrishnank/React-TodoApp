import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Todo({task,todoDelete,todoComplete}){
       return(
        <div className="Todo">
        <p className={`${task.completed ? "completed": " "}`}onClick={()=>todoComplete(task.id)}>{task.task}</p>
        <FontAwesomeIcon icon={faTrash} onClick={()=>todoDelete(task.id)} />
        </div>
       )
}

export default Todo