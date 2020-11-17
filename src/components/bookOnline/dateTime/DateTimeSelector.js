import './DateTimeSelector.css';
import React, { Component } from 'react';

import Calendar from './calendar/Calendar';

class DateTimeSelector extends Component {

    render() {

        return (
            <div className="container date-time-container">
                <h1>Date Time Selector</h1>
                <Calendar />
            </div>
        )
    }
}

export default DateTimeSelector;