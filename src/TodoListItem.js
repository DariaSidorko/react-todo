import React from 'react';
import styles from "./TodoListItem.module.css" 


function TodoListItem({item, onRemoveTodo}) {



  return (
    <li className={styles.ListItem}>
      {/* <p style={{ textAlign: 'left' }}> {item.id} </p> */}
      <span className={styles.task} style={{ textAlign: 'left' }}> {item.title} </span>
      {/* <a className={styles.remove}  onClick={() => onRemoveTodo(item.id)} >X</a> */}
      <button className='material-symbols-outlined' onClick={() => onRemoveTodo(item.id)}>Delete</button>
    </li>
  );
}

export default TodoListItem;