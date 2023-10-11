import React from 'react';

function AddTodoForm () {
  return (
    <form>
      <lable htmlFot="todoTitle" >Title</lable>
      <input id="todoTitle"></input>
      <button type='submit'> add</button>
    </form>
  )
}

export default AddTodoForm;