import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
  return [todoList, setTodoList]
}

function App() {

 const [todoList, setTodoList] = useSemiPersistentState();

//  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);

//  React.useEffect((resolve, reject) => {
//   setTimeout(function () {
//     resolve(data={})
//   }, 2000)
// });
 

  const addTodo = (newTodo) => {
    // setTodoList((prevTodo) => [...prevTodo, ...newTodo]);
    setTodoList([...todoList, ...newTodo])
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id))
  }

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      <TodoList todoList = {todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;