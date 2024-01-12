import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
//   return [todoList, setTodoList]
// }

function App() {

//  const [todoList, setTodoList] = useSemiPersistentState();

 const [todoList, setTodoList] = React.useState([]);

 const [isLoading, setIsLoading] =  React.useState(true);


  // const addTodo = (newTodo) => {
  //   // setTodoList((prevTodo) => [...prevTodo, ...newTodo]);
  //   postTodo(newTodo.title)
  //   // setTodoList([...todoList, ...newTodo])
  // }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id))
  }



  const fetchData = async() => {

    
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`}
    }
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
    console.log(url)
    try {

    const response = await
       fetch(url, options);

       if (!response.ok) {
         const message = `Error: ${response.status}`;
         throw new Error(message);
       }
       const data = await response.json();
      console.log(data);

       const todos = data.records.map((todo) => {

          const newTodo =  {
              id: todo.id,
              title: todo.fields.title
          }

          return newTodo

      });

      setTodoList(todos);

      setIsLoading(false)

      } catch (error) {
          console.log(error.message)
      }
      

  }

  

    const postTodo = async (todo) => {
      const airtableData = {
              fields: {
                title: todo[0].title,
              },
            };
            console.log(airtableData)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      }

      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`

      try {
    
        const response = await fetch(url, options);
    
        if (!response.ok) {
          const message = `Error has ocurred:
                                 ${response.status}`;
          throw new Error(message);
        }
    
        fetchData();

        const dataResponse = await response.json();

        // setTodoList(dataResponse);
        return dataResponse;
      } catch (error) {
        console.log(error.message);
        return null;
      }

      

    };

    React.useEffect(() => {
      fetchData();
    },[]);

  // React.useEffect(() => {
  //   // if(isLoading === false) {
  //   // localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  //   // } 
  // }, [todoList, isLoading]);


  // React.useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({data:{todoList: JSON.parse(localStorage.getItem("savedTodoList")) || []}})
  //     }, 2000)
  //   }).then((result) => {
  //     setTodoList(result.data.todoList)
  //     setIsLoading(false)
  //   })
    
  // }, []);
   

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.Fragment><h1>New ToDo List</h1></React.Fragment>}></Route>
      <Route path="/new" element={<React.Fragment>        
        <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={postTodo}/>
      {isLoading ? <p>Loading...</p> :  <TodoList todoList = {todoList} onRemoveTodo={removeTodo} />}
     
    </div> 
        </React.Fragment>}>
      </Route>
      <Route>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;