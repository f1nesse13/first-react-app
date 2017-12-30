import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
   constructor(props) {
      super(props)
      console.log('Lifecycle - [Persons.js] Inside constructor')
    }
    componentWillMount() {
      console.log('Lifecycle - [Persons.js] Inside componentWillMount')
    }
    componentDidMount() {
      console.log('Lifecycle - [Persons.js] Inside componentDidMount')
    }
    componentWillReceiveProps(nextProps) {
      console.log('UPDATED [Persons.js] inside componentWillRecieveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
     console.log('UPDATED [Persons.js] inside shouldComponentUpdate', nextProps, nextState) // Important* Can gain performance by returning false 
     return nextProps.persons !== this.props.persons // Returns true so DOM will re render - Some use cases exist for including shouldComponentUpdate for performance gains
  }
  componentWillUpdate(nextProps, nextState) {
   console.log('UPDATED [Persons.js] inside componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate() {
   console.log('UPDATED [Persons.js] inside componentDidUpdate')
  }
   render() {
      console.log('Lifecycle - [Persons.js] Inside render')
      return this.props.persons.map((person, index) => {
         return <Person 
            position={index}
           inputChange={( event ) => this.props.changed( event, person.id )}
           click={() => this.props.clicked(index)}
           key={person.id}
           name={person.name} age={person.age}
           dogName={person.dogName} dogAge={person.dogAge} /> 
           })
   }
}
   



export default Persons;