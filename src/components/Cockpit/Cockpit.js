import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxiliry'

const cockpit = (props) => {
   
   let btnClass = classes.Button; // Created variable to change if conditions are met
   const classStyle = [] // Gives us a empty array to push styles into if conditions are met
   
   if (props.showPerson) {
   btnClass = [classes.Button, classes.Red].join(" ") // set our button to equal the .Red class from our app.css if conditions met
   }
   if (props.persons.length <= 2) {
     classStyle.push(classes.red)
   }
   if (props.persons.length <= 1) {
     classStyle.push(classes.bold)
   }
   
   return (
     <Aux>
         <p> {props.title} </p>
         <p className={ classStyle.join(' ') } > Conditional class assignment example  </p>
        <button key='btn1' className={btnClass} onClick={props.toggle}> Click to toggle  </button>
        <h4> Passing args to functions/methods - bind is more efficient but you can get away with arrow functions with small apps </h4>
        </Aux> // Aux is a higher order component that returns just children. While it looks pointless it is quite useful for wrapping elements without
        // adding a unwanted element like a div. We can also use it to help us apply styles or add additional functionaility
        // NOTE * - React 16.2+ you can use a fragment which is just <> </> without the need to create the HOC file
   )
}

export default cockpit;