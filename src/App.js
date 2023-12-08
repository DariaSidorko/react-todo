import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {useState} from 'react';


function App() {

  // const [newTodo, setNewTodo] = useState();
  // onAddTodo={setNewTodo}

  const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState([]);
    return [todoList, setTodoList]
  }

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
    localStorage.setItem("savedTodoList", JSON.stringify([...todoList, ...newTodo]));
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      {/* <p>{newTodo}</p> */}
      <TodoList TodoList={todoList.length > 0 ? JSON.parse(localStorage.getItem("savedTodoList")) : [] } />
    </div>
  );
  
}

export default App;
