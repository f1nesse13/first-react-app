import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass2 from '../hoc/withClass2'
import classes from './App.css';
import Aux from '../hoc/Auxiliry'

// PureComponent does a shallow check on the Virtual DOM for changes and if there are none it sets shouldComponentUpdate to false

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('Lifecycle - [App.js] Inside constructor')
    this.state = {
      persons: [
        { id: "d328nc747", name: "Joe", age: "30", dogName: "Aurora", dogAge: "2" },
        { id: "d209189c3", name: "Vincent", age: "27", dogName: "Spot", dogAge: "8" },
        { id: "d8324e092", name: "Elizabeth", age: "23", dogName: "Cupcake", dogAge: "16" }
      ],
      showPerson: false,
      counter: 0

    }
  }
  componentWillMount() {
    console.log('Lifecycle - [App.js] Inside componentWillMount')
  }
  componentDidMount() {
    console.log('Lifecycle - [App.js] Inside componentDidMount')
  }
  nameEventHandler = (newName) => {
    this.setState({
      persons: [
        { id: "d328nc747", name: newName, age: "45", dogName: "Golfy", dogAge: "5002" },
        { id: "d209189c3", name: "Santa", age: "73", dogName: "Jesus", dogAge: "6" },
        { id: "d8324e092", name: "Easter Bunny", age: "37", dogName: newName, dogAge: "62" }
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

  deletePersonHandler = (personIndex) => { // Person index gets passed to function from the onClick event
    const peeps = [...this.state.persons]
    peeps.splice(personIndex, 1)
    return this.setState({persons: peeps})
  }
  togglePersonHandler = () => {
    const show = this.state.showPerson
    this.setState( ( prevState, props ) => {
      console.log(props)
    return {showPerson: !show, counter: prevState.counter + 1} // toggles our persons array if condition is true
    })
}
  render() {
  
    console.log('Lifecycle - [App.js] Inside render')
    let persons = null; // starts as a blank screen 
    if ( this.state.showPerson ) { // if we click toggle this condition becomes true and returns our div with our persons
      persons = <Persons 
      clicked={this.deletePersonHandler}
      persons={this.state.persons}
      changed={this.inputHandler} />
  }
  
    return (
      // WithClass is a component that returns the children inside a wrapping div that accepts a className - Can be used anywhere we need to wrap elements
     <Aux>
        {persons}
        <Cockpit title={this.props.title} persons={this.state.persons} showPerson={this.state.showPerson} toggle={this.togglePersonHandler} nameHandler={this.nameEventHandler} />
        <div>{this.state.counter}</div>
      </Aux>
    );
  }
}

export default withClass2(App, classes.App);
