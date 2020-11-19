import React, { Component } from 'react';
import './BookOnlineContainer.css';
// import Calendar from '../../imgs/Calendar_Example.jpeg';
import AppointmentType from './appointmentType/AppointmentType';
import DateTimeSelector from './dateTime/DateTimeSelector';
import UserInfo from './userInfo/UserInfo';

class BookOnlineContainer extends Component {

    state = {
        appointmentDetailsStep: "type",
        service: {},
        loading: false
    }

    setServiceSelection = (service) => {
        this.setState({
            ...this.state,
            appointmentDetailsStep: "dateTime",
            service: service,
            loading: true
        })
    }

    renderAppointmentInfoContainer = () => {
        switch(this.state.appointmentDetailsStep) {
            case "type":
                return <AppointmentType handleServiceSelection={this.setServiceSelection}/>
            case "dateTime":
                return <DateTimeSelector />
            case "userInfo":
                return <UserInfo />
            default:
                return <AppointmentType />
        }
    }

    render() {
        
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
                        {this.renderAppointmentInfoContainer()}
                    </div>
                </div>
            </div>
        )

        
    }
}

export default BookOnlineContainer;