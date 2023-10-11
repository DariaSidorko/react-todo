import React from 'react';

const todoList = [];
todoList.push({id: 1, title: "First task"});
todoList.push({id: 2, title: "Second task"});
todoList.push({id: 3, title: "Third task"});


function TodoList() {
  return ( 
    todoList.map((item) =>{
        return (
          <ul>
            <li style={{ textAlign: 'left' }}> {item.id} </li>
            <li style={{ textAlign: 'left' }}> {item.title} </li>
          </ul>
        )
        }) 
      )}

export default TodoList;