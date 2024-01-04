import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {useState} from 'react';


function App() {

  const useSemiPersistentState = () => {
    const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
    return [todoList, setTodoList]
  }

 const [todoList, setTodoList] = useSemiPersistentState();

 
  const addTodo = (newTodo) => {
    // setTodoList((newTodo) => [...todoList, ...newTodo]);
    setTodoList([...todoList, ...newTodo])
    console.log(todoList)
    localStorage.setItem("savedTodoList", JSON.stringify([...todoList, ...newTodo]));
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id))
    localStorage.setItem("savedTodoList", JSON.stringify(todoList.filter((list) => list.id !== id)));
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      <TodoList todoList = {todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;