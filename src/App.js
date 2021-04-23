import './App.css';
import Header from "./myComponents/Header";
import AddTodo from "./myComponents/AddTodo";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import { About } from "./myComponents/About";
import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
        initTodo = [];
  }
  else{
        initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title,desc)=>{
    let sno = 0
    if(todos.length !== 0)
      sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
   
  }

  

  const onDelete=(todo)=>{
    console.log("Iam delete",todo);
    //Deleting this way does not work in react
    //let ind = todos.indexOf(todo);
    //todos.splice(ind,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
   
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
     <Router>
      <Header title="MyTodosList" />

      <Switch>
          <Route exact path="/about">
            <About />
          </Route>  
          <Route path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos={todos} onDelete = {onDelete}/>
              </>
            )
          }}>
          </Route>  
             
      </Switch>

      <Footer/>
     </Router>
    </>
  );
}

export default App;
