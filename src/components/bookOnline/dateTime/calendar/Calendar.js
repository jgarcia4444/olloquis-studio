import React, { Component } from 'react';
import "./Calendar.css";
import CalendarControls from './calendarControls/CalendarControls';
import CalendarRow from './calendarRow/CalendarRow';

class Calendar extends Component {

    state = {
        todaysDate: new Date(Date.now()),

    }



    render() {

        return (
            <div className="container calendar-container">
                    <CalendarControls />
                    <CalendarRow />
            </div>
        )
    }
}
export default Calendar