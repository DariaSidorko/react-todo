import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {useState} from 'react';



function App() {

  // const [newTodo, setNewTodo] = useState();
  // onAddTodo={setNewTodo}
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      {/* <p>{newTodo}</p> */}
      <TodoList TodoList={todoList}/>
    </div>
  );
  
}

export default App;
