import React,{useState} from "react";

function TodoForm({addTodo}){
    const [value,setValue] = useState("")

    const todoFormSubmit = e => {
         e.preventDefault();
         addTodo(value);
         setValue("");
    }

    return(
        <>
        <form className="TodoForm" onSubmit={todoFormSubmit}>
            <input type="text" className="todo-input" 
            placeholder="enter the task" value={value} onChange={(event) =>setValue(event.target.value)}/>
            <button type="submit" className="todo-btn">Add task</button>
        </form>
        </>
    )

}
 export default TodoForm