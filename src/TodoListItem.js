import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {useState} from 'react';



function TodoListItem(props) {
  return (
    <div>
      <li style={{ textAlign: 'left' }}> {props.list.id} </li>
      <li style={{ textAlign: 'left' }}> {props.list.title} </li>
    </div>
  );
}

export default TodoListItem;
