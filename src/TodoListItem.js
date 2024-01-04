import React from 'react';


function TodoListItem({item, onRemoveTodo}) {


  

  return (
    <ul>
      <li style={{ textAlign: 'left' }}> {item.id} </li>
      <li style={{ textAlign: 'left' }}> {item.title} </li>
      <button onClick={() => onRemoveTodo(item.id)} >Remove</button>
    </ul>
  );
}

export default TodoListItem;