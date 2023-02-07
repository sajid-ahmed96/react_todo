import { useState } from 'react';
// import todoinput from './todoinput';
// import todoList from './todolist';
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // let [editToDo, setEditToDo] = useState(null)

  const saveToDo = () => {

    if(todo !== ""){
      setTodos([...todos,todo]);
      setTodo("");
      console.log(todos);
    }
  }

  const deleteAll = () => {
    setTodos([]);
  }

  const deleteToDo =(text) => {
    const newToDo = todos.filter((todo) =>{
      return todo !== text
    })
    setTodos(newToDo)
    }

  const editTodo = (todo,index) => {
    console.log(todo,index) 
  }

  return (

    <div className="App">

        <h1>Start your work by adding your to do below:</h1>
      
        <div className="inputStyle">
          <input type="text" name="text" value={todo} onChange={(e)=>{
          setTodo(e.target.value)
          }} placeholder='Enter toDo' />
          <button onClick={saveToDo}>Add</button>
          <button onClick={deleteAll}>Delete</button>
        </div>
      
      {todos?.length > 0 ? (
        <ul className="toDoList">
          {todos.map((todo,index) => {
            return (
            <div>
              <li key={index}>{todo}</li>
              <button onClick={()=>{editTodo(todo,{id:index})}}>Edit</button>
              <button onClick={()=>{deleteToDo(todo)}}>Delete</button>
            </div>
            )
          })}
        </ul>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}

    </div>

  );

}

export default App;
