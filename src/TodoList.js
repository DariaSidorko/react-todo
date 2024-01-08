import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList({todoList, onRemoveTodo}) {

  return (
    <ul>
      {
    todoList.map((item) =>{
        return (
            <TodoListItem item={item} key={item.id} onRemoveTodo={onRemoveTodo}/>
        )
        }) 
      }
      </ul>
  )}

export default TodoList;