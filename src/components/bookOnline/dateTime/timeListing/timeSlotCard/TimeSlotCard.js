import './TimeSlotCard.css';
import React, { Component } from 'react';

class TimeSlotCard extends Component {

    militaryTimeConverter = (time) => {
        console.log(time)
        if (time < 13) {
            console.log("Hola")
            return  `${time}:00 a.m.`
        } else if (time > 12) {
            let timeNum = time - 12;
            return `${timeNum}:00 p.m.`
        } else {
            return ""
        }
    }

    formatTime = (time) => {

        let startTimeString = this.militaryTimeConverter(time) 
        
        console.log(startTimeString)
        return (
            <div onClick={() => this.props.handleTimeSelection(this.props.time)} className="time-div">
                {startTimeString}
            </div>
        )
        
    }

    render() {

        return (
            <div className="col-6 time-slot-card-col">
                {this.formatTime(this.props.time)}
            </div>
        )
    }
}

export default TimeSlotCard;