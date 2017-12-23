import React, { Component } from 'react';
import Person from './Person'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [
        { id: "d328nc747", name: "Joe", age: "30", dogName: "Aurora", dogAge: "2" },
        { id: "d209189c3", name: "Vincent", age: "27", dogName: "Spot", dogAge: "8" },
        { id: "d8324e092", name: "Elizabeth", age: "23", dogName: "Cupcake", dogAge: "16" }
      ],
      showPerson: false
    }
  }
  nameEventHandler = (newName) => {
    this.setState({
      persons: [
        { id: "d328nc747", name: newName, age: "45", dogName: "Golfy", dogAge: "5002" },
        { id: "d209189c3", name: "Santa", age: "73", dogName: "Jesus", dogAge: "6" },
        { id: "d8324e092", name: "Easter Bunny", age: "37", dogName: "newName", dogAge: "62" }
      ]
    })
  }
  inputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; // Finds the right person accordind to their ID
    })
    const person = { ...this.state.persons[personIndex] } // makes copy of the person at correct index
    person.name = event.target.value
    // Captured value of input and set equal to person.name
    const persons = [...this.state.persons] // Copy of state
    persons[personIndex] = person // sets the states persons array = to the person found
    this.setState({persons: persons}) // sets state to the new value of persons
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
        key={person.id}
        inputChange={( event ) => this.inputHandler( event, person.id )}
        click={() => this.deletePersonHandler(index)}
         name={person.name} age={person.age}
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
