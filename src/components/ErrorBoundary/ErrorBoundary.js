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