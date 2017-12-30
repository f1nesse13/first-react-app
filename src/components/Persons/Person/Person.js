import React, { Component } from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('Lifecycle - [Person.js] Inside constructor')
      }
      componentWillMount() {
        console.log('Lifecycle - [Person.js] Inside componentWillMount')
      }
      componentDidMount() {
        console.log('Lifecycle - [Person.js] Inside componentDidMount')
        if (this.props.position === 0){
        this.inputElement.focus()
        }
      }
   render(){
    console.log('Lifecycle - [Person.js] Inside render()')
    return (
        <WithClass classes={classes.seperator} >
            <p>Hi my name is {this.props.name} and I am {this.props.age} years old. </p>
            <p> I have a dog named {this.props.dogName} and shes only {this.props.dogAge}</p>
            <h3> Type below to change the names - two way binding </h3>
            <input type="text" onChange={this.props.inputChange} value={this.props.name}
            ref={(input) => { this.inputElement = input }} />
            <div> {this.props.children} </div>
            <h3 onClick={this.props.click}> Click to delete </h3>
        </WithClass>
        // ref= is a keyword that allows us to define a new prop available to us after render. it is used in special cases such as focus and media playback
        // we use ref focus our first textbox in this example. See docs for implementations
    )
}
}
Person.defaultProps = {
    name: "Stranger",
    age: 5
}
// defaultProps will give the properties a value if nothing is defined
Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    inputChange: PropTypes.func,
    click: PropTypes.func
}
// PropTypes is used in development to make sure the values props are recieving are of the correct type. This does nothing in production but is good
// when working on teams or in places where its important to recieve the correct data type. See Docs for all options
export default Person;


