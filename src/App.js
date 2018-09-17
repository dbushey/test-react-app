import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <Person name="Dai" age="35"/>
        <Person name="Juju" age="500">My hobbies: dancing</Person>
          <Person name="Nana" age="300"/>
        </div>
        );
  }
}

export default App;
