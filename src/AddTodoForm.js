import React from 'react';

function AddTodoForm (prop) {

  const handleAddTodo = (e) => {
    e.preventDefault();
    let todoTitle = document.getElementById("todoTitle").value;
    document.getElementById("todoTitle").value = "";
    console.log(todoTitle);
    prop.onAddTodo(todoTitle);
  } 

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFot="todoTitle" >Title</label>
      <input id="todoTitle" name="title"></input>
      <button type='submit' > add</button>
    </form>
  )
}

export default AddTodoForm;