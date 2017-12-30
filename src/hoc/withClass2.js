import React, { Component } from 'react'

// const withClass2 = (WrappedComponent, className) => {
//    return (props) => ( 
//       <div className={className}> 
//          <WrappedComponent {...this.props} />
//       </div>
//     )
// }  
//Returns a stateless component with className

const withClass2 = (WrappedComponent, className) => {
      return class extends Component {
         render() {
            return (
               <div className={className}>
                  <WrappedComponent {...this.props} />
               </div>
               
            )
         }
   }
}
// Returns a statefull component with className - turns our wrapped element into a class
export default withClass2;