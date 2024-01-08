import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
//   return [todoList, setTodoList]
// }

function App() {

//  const [todoList, setTodoList] = useSemiPersistentState();

 const [todoList, setTodoList] = React.useState([]);

 const [isLoading, setIsLoading] =  React.useState(true);


  const addTodo = (newTodo) => {
    // setTodoList((prevTodo) => [...prevTodo, ...newTodo]);
    setTodoList([...todoList, ...newTodo])
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id))
  }

  React.useEffect(() => {
    if(isLoading === false) {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    } 
  }, [todoList, isLoading]);


  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data:{todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []}})
      }, 2000)
    }).then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    })
    
  }, []);
   

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      {isLoading ? <p>Loading...</p> :  <TodoList todoList = {todoList} onRemoveTodo={removeTodo} />}
     
    </div>
  );
}

export default App;