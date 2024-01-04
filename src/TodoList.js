import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList({todoList, onRemoveTodo}) {

  return ( 
    todoList.map((item) =>{
        return (
            <TodoListItem item={item} key={item.id} onRemoveTodo={onRemoveTodo}/>
        )
        }) 
      )}

export default TodoList;