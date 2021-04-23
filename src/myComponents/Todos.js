import React from 'react';
import Todo from "./Todo";

export default function Todos(props) {
    let myStyle = {
        minHeight :"60vh",

    }
    return (
        <div className = "container my-3" style={myStyle}>
            <br/><hr/>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0?
            <h4 class="text-danger">No Todos to display</h4>:
            props.todos.map((todo)=>{
                return <Todo todo = {todo} key={todo.sno} onDelete = {props.onDelete} />
            })}
            
            
           

        </div>
    )
}




