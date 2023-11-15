import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList(props) {


  return ( 
    props.TodoList.map((item) =>{
        return (
          <ul>
            <TodoListItem list={item}/>
          </ul>
        )
        }) 
      )}

export default TodoList;