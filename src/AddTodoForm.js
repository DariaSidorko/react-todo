import React from 'react';

import {useState} from 'react';

function AddTodoForm (props) {

  const [todoTitle, setTodoTitle] = useState();

  const handleTitleChange = (e) => {
    e.preventDefault();
    let newTodoTitle = e.target.value;
    //console.log(newTodoTitle)
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    props.onAddTodo([{title:todoTitle, id:Date.now()}]);
    document.getElementById("todoTitle").title = " ";
  } 

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFot="todoTitle" >Title</label>
      <input id="todoTitle" name="title" value={props.todoTitle} onChange={handleTitleChange}></input>
      <button type='submit' > add</button>
    </form>
  )
}

export default AddTodoForm;