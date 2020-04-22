import React, { Component } from "react"
import "./App.css"
import Age from "./Age"

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     name: "Mike",
  //     age: 34,
  //   }
  // }

  state = {
    name: "Mike",
    age: 34,
    location: "",
    friend: {
      name: "Jon",
      age: 27,
      homestate: "Florida",
    },
  }

  birthday = () => {
    this.setState({ age: this.state.age + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi this is {this.state.name}</h1>
        <Age
          age={this.state.age}
          name={this.state.name}
          active={true}
          friendAge={this.state.friend.age}
        />
        <button onClick={this.birthday}>Birthday</button>
      </div>
    )
  }
}

export default App
