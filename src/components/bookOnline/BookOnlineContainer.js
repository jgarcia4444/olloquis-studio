import React, { Component } from 'react';
import './BookOnlineContainer.css';
// import Calendar from '../../imgs/Calendar_Example.jpeg';
import AppointmentType from './appointmentType/AppointmentType';
import DateTimeSelector from './dateTime/DateTimeSelector';
import UserInfo from './userInfo/UserInfo';
import ConfirmationPage from './confirmationPage/ConfirmationPage';

class BookOnlineContainer extends Component {

    state = {
        appointmentDetailsStep: "type",
        service: {},
        selectedTime: undefined,
        selectedDate: undefined,
        userInfo: {
            fName: "",
            lName: "",
            email: "",
            agree: false
        }
    }

    bookAnotherAppointment = () => {
        this.setState({
            ...this.state,
            appointmentDetailsStep: "type"
        })
    } 

    setServiceSelection = (service) => {
        this.setState({
            ...this.state,
            appointmentDetailsStep: "dateTime",
            service: service,  
        })
    }

    setSelectedTime = (time) => {
        this.setState({
            ...this.state,
            selectedTime: time,
            appointmentDetailsStep: "userInfo"
        })
    }

    setDateSelected = (date) => {
        this.setState({
            ...this.state,
            selectedDate: date
        })
    }

    setUserInfo = (userInfo) => {
        this.setState({
            ...this.state,
            appointmentDetailsStep: "confirmationPage",
            userInfo: {
                ...userInfo.userInfo
            }
        })
        let monthNum = this.state.selectedDate.getMonth()
        let dayNum = this.state.selectedDate.getDate()
        let objectForAppointment = {
            appointment_info: {
                duration: this.state.service.duration,
                time_start: this.state.selectedTime,
                day_number: dayNum,
                month_number: monthNum,
                service_name: this.state.service.name,
                price: parseInt(this.state.service.price),
                first_name: userInfo.userInfo.fName,
                last_name: userInfo.userInfo.lName,
                email: userInfo.userInfo.email
            }
        }
        this.persistAppointmentToDB(objectForAppointment)
    }

    persistAppointmentToDB = (appointmentInfo) => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        }
        fetch("http://localhost:3000/appointments", options)
            .then(res => res.json())
            .then(data => console.log(data))
    } 

    renderAppointmentInfoContainer = () => {
        let {service, selectedTime, selectedDate, userInfo} = this.state
        switch(this.state.appointmentDetailsStep) {
            case "type":
                return <AppointmentType handleServiceSelection={this.setServiceSelection}/>
            case "dateTime":
                return <DateTimeSelector setDateSelected={this.setDateSelected} service={this.state.service} setSelectedTime={this.setSelectedTime} />
            case "userInfo":
                return <UserInfo setUserInfo={this.setUserInfo} service={service} selectedTime={selectedTime} selectedDate={selectedDate} />
            case "confirmationPage":
                return <ConfirmationPage bookAnotherAppointment={this.bookAnotherAppointment} service={service} selectedTime={selectedTime} selectedDate={selectedDate} userInfo={userInfo} />
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