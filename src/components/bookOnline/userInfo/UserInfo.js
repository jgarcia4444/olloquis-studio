import './UserInfo.css';
import React, { Component } from 'react';
import AppointmentDetails from './appointmentDetails/AppointmentDetails';


class UserInfo extends Component {

    state = {
        fName: "",
        lName: "",
        email: "",
        agree: false
    }

    handleInputChange = (e) => {
        console.log(e)
        if (e.target.name === "agree") {
            this.setState({
                ...this.state,
                agree: !this.state.agree
            })
        } else {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })
        }
        
    }

    handleUserInfoSubmit = (e) => {
        e.preventDefault()
        let appointmentInfoObject = {
            userInfo: {
                fName: this.state.fName,
                lName: this.state.lName,
                email: this.state.email,
                agree: this.state.agree
            }
        }
        this.props.setUserInfo(appointmentInfoObject)
    }

    

    render() {

        let { service, selectedTime, selectedDate} = this.props
        let userName = {
            fName: this.state.fName,
            lName: this.state.lName
        }

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
                            <AppointmentDetails userName={userName} service={service} selectedTime={selectedTime} selectedDate={selectedDate} />
                            <small><sup>*</sup>Durations vary</small>
                        </div>
                        <div className="col-6">
                            <div className="container">
                                <div className="row terms-row">
                                    <div className="col-2">
                                        <input type="checkbox" name="agree" id="agree" onChange={this.handleInputChange} value={this.state.agree} required/>
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