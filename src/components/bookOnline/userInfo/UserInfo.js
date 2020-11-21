import './UserInfo.css';
import React, { Component } from 'react';
import AppointmentDetails from './appointmentDetails/AppointmentDetails';


class UserInfo extends Component {

    state = {
        fName: "",
        lName: "",
        email: ""
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleUserInfoSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    

    render() {

        let { service, selectedTime, selectedDate} = this.props

        return (
            <div className="container">
                <h3>Appointment Info</h3>
                <form id="user-info-form" onSubmit={this.handleUserInfoSubmit}>
                    <div className="form-group row">
                        <div className="col-6">
                            <label htmlFor="fName">First Name</label>
                            <input type="text" id="first-name-input" className="form-control" name="fName" value={this.state.fName} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lName">Last Name</label>
                            <input type="text" id="last-name-input" className="form-control" name="lName" value={this.state.lName} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" name="email" onChange={this.handleInputChange} value={this.state.email} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <AppointmentDetails service={service} selectedTime={selectedTime} selectedDate={selectedDate} />
                        </div>
                        <div className="col-6">
                            <div className="container">
                                <div className="row terms-row">
                                    <div className="col-2">
                                        <input type="checkbox" name="agree" id="agree" required/>
                                    </div>
                                    <div className="col-10">
                                        <span id="terms-and-policies-details">Checking this box agrees to terms and Covid policies.</span><br/>
                                        <small id="link-to-terms-and-policies">See terms and policies</small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12" id="user-info-submit-col">
                                        <button type="submit" id="user-info-submit-button">Confirm Appointment</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserInfo;