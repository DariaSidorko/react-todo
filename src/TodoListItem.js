import React from 'react';


function TodoListItem({item, onRemoveTodo}) {



  return (
    <li>
      <p style={{ textAlign: 'left' }}> {item.id} </p>
      <p style={{ textAlign: 'left' }}> {item.title} </p>
      <button onClick={() => onRemoveTodo(item.id)} >Remove</button>
    </li>
  );
}

export default TodoListItem;