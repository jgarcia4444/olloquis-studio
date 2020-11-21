import './AppointmentDetails.css';
import React from 'react';

const AppointmentDetails = (props) => {

    let {userName, service, selectedTime, selectedDate} = props

    const militaryTimeConverter = (time) => {
        if (time < 12) {
            return `${time}:00 a.m.`
        } else if (time === 12) {
            return `${time}:00 p.m.`
        } else if(time > 12) {
            let adjustedTime = time - 12;
            return `${adjustedTime}:00 p.m.`
        }
    }

    const durationAdjuster = (duration) => {
        if (duration > 59) {
            if (duration % 60 === 0) {
                let hours = duration / 60
                if (hours > 1) {
                    return `${hours} hrs`
                } else {
                    return `${hours} hr`
                }
            } else {
                let hours = duration / 60
                let minutes = duration % 60
                if (hours > 1) {
                    return `${hours} hrs ${minutes} mins`
                } else {
                    return `${hours} hr ${minutes} mins`
                }
            }
        } else {
            return `${duration} mins`
        }
    }

    return (
        <div className="container" id="appointment-details-container">
            <div className="row text-center">
                <div className="col-12">
                    {userName.fName} {userName.lName}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Service: {service.name}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Duration: {durationAdjuster(service.duration)}<sup>*</sup>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Time: {militaryTimeConverter(selectedTime)}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Date: {selectedDate.toDateString()}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Price: ${service.price}.00
                </div>
            </div>
        </div>
    )
}


export default AppointmentDetails;