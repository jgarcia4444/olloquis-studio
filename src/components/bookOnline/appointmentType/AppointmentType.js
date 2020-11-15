import React, { Component } from 'react';
import Service from './service/Service';

class AppointmentType extends Component {


    renderLashServices = (lashServices) => {
        return lashServices.map(service => {
            return (
                <Service service={service} />
            )
        })
    }

    render() {

        const lashServices = [
            {
                name: "Full Classic Set",
                duration: 120,
                price: "150"
            },
            {
                name: "Classic 2 Week Fill",
                duration: 120,
                price: "65"
            },
            {
                name: "Classic 3 Week Fill",
                duration: 120,
                price: "75"
            },
            {
                name: "Classic 4-5 Week Fill",
                duration: 120,
                price: "Price varies"
            },
            {
                name: "Full Hybrid Set",
                duration: 120,
                price: "175"
            },
            {
                name: "2 Week Hybrid Fill",
                duration: 120,
                price: "75"
            },
            {
                name: "3 Week Hybrid Fill",
                duration: 120,
                price: "85"
            },
            {
                name: "4-5 Week Hybrid Fill",
                duration: 120,
                price: "Price varies"
            },
            {
                name: "Full Volume Set",
                duration: 180,
                price: "200"
            },
            {
                name: "2 Week Volume Fill",
                duration: 120,
                price: "85"
            },
            {
                name: "3 Week Volume Fill",
                duration: 180,
                price: "95"
            },
            {
                name: "3-4 Week Volume Fill",
                duration: 180,
                price: "Price varies"
            },
            {
                name: "Quick Fill",
                duration: 45,
                price: "35"
            },
            {
                name: "Deep-Clean",
                duration: 10,
                price: "10"
            },
            {
                name: "Make Up",
                duration: 60,
                price: "85"
            },
            {
                name: "Week Fill",
                duration: 60,
                price: "35"
            }
        ]

        return (
            <div className="container appointment-type-container">
                <div className="row appointment-type-row">
                    <div className="col-6">
                        <h4 id="appointent-type-direction">
                            Pick an appointment type
                        </h4>
                        <p id="appointment-type-direction-details">
                            Pick an option to the right and you 
                        </p>
                    </div>
                    <div className="col-6">
                        {this.renderLashServices(lashServices)}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentType;