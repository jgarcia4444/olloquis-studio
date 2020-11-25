import './ConfirmationPage.css';
import React, { Component } from 'react';

class ConfirmationPage extends Component {

    militaryTimeConverter = () => {
        let time = this.props.selectedTime
        if (time < 12) {
            return `${time}:00 a.m.`
        } else if (time === 12) {
            return `${time}:00 p.m.`
        } else if(time > 12) {
            let adjustedTime = time - 12;
            return `${adjustedTime}:00 p.m.`
        }
    }

    fullName = () => {
        let {fName, lName} = this.props.userInfo
        let uppercasedFName = fName.slice(0,1).toUpperCase() + fName.slice(1)
        let uppercasedLName = lName.slice(0,1).toUpperCase() + lName.slice(1)
        return `${uppercasedFName} ${uppercasedLName}`
    }

    render() {

        return (
            <div className="container confirmation-container">
                <div className="row text-center">
                    <div className="col-12">
                        <h3 id="confirmation-heading">
                            Appointment Booking Complete!
                        </h3>
                        <p id="confirmation-message">
                            Thank you <strong>{this.fullName()}</strong> for booking an appointment. The studio has been notified of your <strong>{this.props.service.name}</strong> on <strong>{this.props.selectedDate.toDateString()}</strong> at <strong>{this.militaryTimeConverter()}</strong> Look out for a confirmation email at <strong>{this.props.userInfo.email}</strong> as well as further instructions due to Covid-19.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <button onClick={this.props.bookAnotherAppointment} id="book-again-button">
                            Book Another Appointment
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmationPage