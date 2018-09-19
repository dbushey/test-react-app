import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am a {props.name}! And I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="test" onChange={props.changed} value={props.name}/>
    </div>
  )

}

export default person;
