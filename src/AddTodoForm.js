import React from 'react';

import {useState} from 'react';
import InputWithLabel from './InputWithLabel';


function AddTodoForm ({onAddTodo}) {

  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    let newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo([{title:todoTitle, id:Date.now()}]);
    setTodoTitle(' ')
    
  } 

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel  id={"todoTitle"} title={"title"} value={todoTitle} handleChange = {handleTitleChange}> Title: </InputWithLabel>
      <button type='submit' > add</button>
    </form>
  )
}

export default AddTodoForm;