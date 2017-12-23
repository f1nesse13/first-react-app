import React, { Component } from 'react';
import Person from './Person'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [
        { name: "Joe", age: "30", dogName: "Aurora", dogAge: "2" },
        { name: "Tim", age: "21", dogName: "booBop", dogAge: "13" }
      ],
      showPerson: false
    }
  }
  nameEventHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "45", dogName: "Golfy", dogAge: "5002" },
        { name: "Santa", age: "73", dogName: "Jesus", dogAge: "6" }
      ]
    })
  }
  inputHandler = (event) => {
    this.setState({
      persons: [
        { name: "Joe" , age: "30", dogName: event.target.value, dogAge: "2" },
        { name: event.target.value, age: "21", dogName: "Aurora", dogAge: "13" }
      ]
    })
  }
  deletePersonHandler = (personIndex) => {
    const peeps = [...this.state.persons]
    peeps.splice(personIndex, 1)
    return this.setState({persons: peeps})
  }
  togglePersonHandler = () => {
    const show = this.state.showPerson
    this.setState({showPerson: !show})
  }
  render() {
    let persons = null;
    if ( this.state.showPerson ) {
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person
        click={() => this.deletePersonHandler(index)}
         name={person.name} age={person.name}
          dogName={person.dogName} dogAge={person.dogAge} />
      })}
      </div>
    )
    }
      
    return (
      <div className="App">
        {persons}
        <button onClick={this.togglePersonHandler}> Click to toggle  </button>
        <button onClick={this.nameEventHandler.bind(this, "Regular on Click")}> Click for Change! (bind)</button>
        <button onClick={() => this.nameEventHandler("Foo")}> Another way of passing a argument (arrow)</button>
        <h4> Bind is more efficient but can get away with arrow function with small apps </h4>
      </div>
    );
  }
}



export default App;
