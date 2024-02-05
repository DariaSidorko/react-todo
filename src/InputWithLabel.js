import React from 'react';
// import {useRef} from 'react';


function InputWithLabel({id, title, value, handleChange, children, comment}) {

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus()
      });

  return ( 
            <React.Fragment>
                <label htmlFor={id} >{children}</label>
                <input id={id} name={title} value={value} onChange={handleChange} ref ={inputRef} placeholder={comment} ></input>
            </React.Fragment>
        )
  } 

export default InputWithLabel;