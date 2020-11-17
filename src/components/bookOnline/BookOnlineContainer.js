import React, { Component } from 'react';
import './BookOnlineContainer.css';
import Calendar from '../../imgs/Calendar_Example.jpeg';
import AppointmentType from './appointmentType/AppointmentType';

class BookOnlineContainer extends Component {

    state = {
        appointmentDetailsStep: "type",
        service: {}
    }

    setServiceSelection = (service) => {
        this.setState({
            ...this.state,
            service: service
        })
    }

    render() {
        var AppointmentInfoContainer;

        if (this.state.appointmentDetailsStep === "type") {
            AppointmentInfoContainer = AppointmentType;
            
            
        } else if (this.state.appointmentDetailsStep === "dateTime") {

        } else if (this.state.appointmentDetailsStep === "userInfo") {

        } else {

        }
        return (
            <div className="container-fluid book-online-container">
                <div className="row text-center book-online-title-row">
                    <div className="col-12">
                        <h1 id="book-online-title">Book Online</h1>
                    </div>
                </div>
                <div className="row text-center book-online-details-row">
                    <div className="col-6 book-online-details-col">
                        <p id="book-online-details">
                            Book an appointment conveniently below.
                        </p>
                    </div>
                </div>
                <div className="row book-online-appointemt-row">
                    <div className="col-12 book-online-appointment-col">
                        <AppointmentInfoContainer handleServiceSelection={this.setServiceSelection} />
                    </div>
                </div>
            </div>
        )

        
    }
}

export default BookOnlineContainer;