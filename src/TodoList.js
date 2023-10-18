import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [];
todoList.push({id: 1, title: "First task"});
todoList.push({id: 2, title: "Second task"});
todoList.push({id: 3, title: "Third task"});


function TodoList() {
  return ( 
    todoList.map((item) =>{
        return (
          <ul>
            <TodoListItem list={item}/>
          </ul>
        )
        }) 
      )}

export default TodoList;