import './DateTimeSelector.css';
import React, { Component } from 'react';

import Calendar from './calendar/Calendar';

class DateTimeSelector extends Component {

    render() {

        return (
            <div className="container date-time-container">
                <h2 id="calendar-heading">Appointment Calendar</h2>
                <div className="row calendar-and-time-row">
                    <div className="col-9">
                        <Calendar />
                    </div>
                    <div className="col-3">
                        Time Listing
                    </div>
                </div>
            </div>
        )
    }
}

export default DateTimeSelector;