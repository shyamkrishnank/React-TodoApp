import React,{useState} from "react";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
uuidv4();

function TodoWrapper(){
    const [todo,setTodo] = useState([])

    const addTodo = value => {
        if (value !== ""){
        setTodo([
            ...todo,{id:uuidv4(),task:value,completed:false,isEditing:false}
        ])
    }
    }

    const todoDelete = id => {
        setTodo(
            todo.filter(value => value.id !== id)
        
        )
    }

    const todoComplete = id => {
        setTodo(
            todo.map(value => value.id === id ?{...value,completed :!value.completed}:value)
        )
    }
        
    return(
        <div className="TodoWrapper">
            <h1>Things to do</h1>
        <TodoForm addTodo={addTodo}/>
        {todo.map((value) => (
          <Todo task={value} key={value.id} todoDelete={todoDelete} todoComplete={todoComplete} />
        ))}
        </div>
    )

}

export default TodoWrapper