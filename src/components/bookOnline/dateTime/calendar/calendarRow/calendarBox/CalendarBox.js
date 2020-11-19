import React from 'react';
import './CalendarBox.css';
const getDayName = (index) => {
    switch(index) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return null;
    }
}

const CalendarBox = (props) => {
    let { date } = props
    let dateString = date.toLocaleDateString()
    let day = getDayName(date.getDay())
    
    return (
        <div className="calendar-box-container">
            <div className="row text-center">
                <div className="col-12">
                    {day}
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    {dateString}
                </div>
            </div>
        </div>
    )
}

export default CalendarBox;