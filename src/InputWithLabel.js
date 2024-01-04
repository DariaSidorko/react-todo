import React from 'react';
// import {useRef} from 'react';


function InputWithLabel({id, title, todoTitle, handleTitleChange, Title}) {

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus()
      });

  return ( 
            <React.Fragment>
                <label htmlFor={id} >{Title}</label>
                <input id={id} name={title} value={todoTitle} onChange={handleTitleChange} ref ={inputRef} ></input>
            </React.Fragment>
        )
  } 

export default InputWithLabel;