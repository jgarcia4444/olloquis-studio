import React, { Component } from 'react';
import './TimeListing.css'
import TimeSlotCard from './timeSlotCard/TimeSlotCard';

class TimeListing extends Component {

    renderTimeSlots = () => {
        if (this.props.timeSlots.length > 0) {
            return this.props.timeSlots.map((time, i) => {
                return (
                    <div key={i} className="row text-center time-slot-card-row">
                        <TimeSlotCard handleTimeSelection={this.props.handleTimeSelection} time={time} />
                    </div>
                    
                )
            })
        } else {
            return <div id="no-appointments-message"><p>No appointments are available for the selected date.</p></div>
        }
    }

    render() {

        return(

            <div className="container time-listing-container">
                <h4 id="appointment-times">
                    Appointment Times
                </h4>
                <div className="row service-name-time-slot">
                    <div className="col-12">
                        {this.props.service.name}
                    </div>
                </div>
                <div className="container time-slot-cards-container">
                    {this.renderTimeSlots()}
                </div>
                
            </div>
        )
    }
}

export default TimeListing;