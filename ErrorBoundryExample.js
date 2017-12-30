// ----- Wrapping of error prone code (AJAX etc)
    if ( this.state.showPerson ) { // if we click toggle this condition becomes true and returns our div with our persons
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}> 
        <Person 
        inputChange={( event ) => this.inputHandler( event, person.id )}
        click={() => this.deletePersonHandler(index)}
         name={person.name} age={person.age}
          dogName={person.dogName} dogAge={person.dogAge} /> 
        </ErrorBoundary>

      //   ------ Error Boundry seperate file ------

      import React, { Component } from 'react'

class ErrorBoundary extends Component {
   state = {
      hasError: false,
      errorMessage: ''
   }
   componentDidCatch = (error, info) => {
      this.setState({hasError: true, errorMessage: error})

   }
   render() {
      if (this.state.hasError) {
         return <h1> {this.state.errorMessage} </h1>
      } else {
         return this.props.children
      }
   }
}

export default ErrorBoundary;

// Error boundarys are used for code that has a chance at throwing a error (AJAX calls etc.) and should be used sparingly. In dev mode it will not
// show the error but React will give us their default message. In production it will show the error message. This component is a higher order function
// and should wrap around the components that need to have a catch for errors. Remember to move your key up to the ErrorBoundry since its the outer most
// component