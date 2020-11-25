import './TimeSlotCard.css';
import React, { Component } from 'react';

class TimeSlotCard extends Component {

    militaryTimeConverter = (time) => {
        if (time < 12) {
            return  `${time}:00 a.m.`
        
        } else if (time === 12) {
            return `${time}:00 p.m.`
        } else if (time > 12) {
            let timeNum = time - 12;
            return `${timeNum}:00 p.m.`
        } else {
            return ""
        }
    }

    formatTime = (time) => {
        let startTimeString = this.militaryTimeConverter(time) 
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