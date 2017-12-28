import React from 'react';
import ('./Person.css')

const person = (props) => {
  
   
    return (
        <div className='seperator' >
            <p>Hi my name is {props.name} and I am {props.age} years old. </p>
            <p> I have a dog named {props.dogName} and shes only {props.dogAge}</p>
            <h3> Type below to change the names - two way binding </h3>
            <input type="text" onChange={props.inputChange} value={props.name} />
            <div> {props.children} </div>
            <h3 onClick={props.click}> Click to delete </h3>
        </div>
    )

}
export default person;


