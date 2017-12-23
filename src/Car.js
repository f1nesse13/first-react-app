import React, { Component } from 'react';


class Car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: [
                {
                    make: "Honda",
                    model: "Civic",
                    year: "1991"
                }
            ]
        }


        setTimeout(() => {
            const car = this.state.cars[0]
            var newCar = Object.assign({}, car)
            newCar = {
                make: "Toyota",
                ...newCar
            }
            this.setState({ newCar })
        }, 1000)
    }
    render() {

        return (
            <div>
                <button onClick={this.changeHandler}> Clicky </button>
            </div>
        )
    }
}

export default Car;