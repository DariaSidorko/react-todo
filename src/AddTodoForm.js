import React from 'react';

import {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import styles from "./TodoListItem.module.css" 


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
    <form onSubmit={handleAddTodo} className={styles.addTask}>
      <InputWithLabel className={styles.inputForm} id={"todoTitle"} title={"title"} value={todoTitle} comment={"Add task"} handleChange = {handleTitleChange}>  </InputWithLabel>
      <button className="material-symbols-outlined" type='submit' > done</button>
      {/* <span className="material-symbols-outlined"> add </span> */}
    </form>
  )
}

export default AddTodoForm;