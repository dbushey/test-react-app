import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am a {props.name}! And I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="test" onChange={props.changed} value={props.name}/>
    </div>
  )

}

export default person;
