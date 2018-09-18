import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Dai", age: "35"},
      {name: "Juju", age: "500"},
      {name: "Nana", age: "300"}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!")
    this.setState({
      persons: [
        {name: newName, age: "35"},
        {name: "Juju", age: "500"},
        {name: "Nana", age: "3000000"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <button onClick={() => this.switchNameHandler('Daizinha!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dai!!!")}>My hobbies: dancing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
        );
  }
}

export default App;
