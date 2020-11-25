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
    let timeSlots = props.timeListingsByDate
    console.log(timeSlots)
    var availableTimes = []

    const openApps = () => {
        var availableTimeSlots = [6, 8, 10, 12, 14, 16]
        if (timeSlots !== undefined) {
            timeSlots.forEach(time => {
                availableTimeSlots = availableTimeSlots.filter(availableTime => availableTime !== time)
            })
            if (availableTimeSlots.length === 0) {
                return false
            } else {
                availableTimes = availableTimeSlots
                return true
            }
        } else {
            availableTimes = availableTimeSlots
            return true
        }
        
    }
    
    return (
        <div onClick={() => props.handleDateClick(date, availableTimes)} className={openApps() ? "calendar-box-container open" : "calendar-box-container closed"}>
            <div className="row text-center">
                <div className="col-12 day-col">
                    {day}
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12 date-col">
                    {dateString}
                </div>
            </div>
        </div>
    )
}

export default CalendarBox;