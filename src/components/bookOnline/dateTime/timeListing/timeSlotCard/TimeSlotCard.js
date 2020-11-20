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

    formatTime = (timeObject) => {

        let startTimeString = this.militaryTimeConverter(timeObject.from) 
        let endTimeString = this.militaryTimeConverter(timeObject.to)
        console.log(startTimeString)
        return (
            <div className="time-div">
                {startTimeString} to {endTimeString}
            </div>
        )
        
    }

    render() {

        return (
            <div className="col-12 time-slot-card-col">
                {this.formatTime(this.props.timeObject)}
            </div>
        )
    }
}

export default TimeSlotCard;