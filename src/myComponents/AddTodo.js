
import React, {useState} from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be Empty");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }

    return (
        <div className="container my-3">
            <h4>Add a ToDo</h4>
            <form>
                <div className="mb-3" >
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todotitle" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add ToDo</button>
            </form>

        </div>
    )
}
