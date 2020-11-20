import './DateTimeSelector.css';
import React, { Component } from 'react';

import Calendar from './calendar/Calendar';
import TimeListing from './timeListing/TimeListing';


class DateTimeSelector extends Component {

    state = {
        timeSlots: []
    }

    handleDateClick = (date) => {
        console.log(date)
        let times = [6, 8, 10, 12, 14, 16]
        this.setState({
            ...this.state,
            timeSlots: times
        })
    }

    render() {

        return (
            <div className="container date-time-container">
                <h2 id="calendar-heading">Appointment Calendar</h2>
                <div className="row calendar-and-time-row">
                    <div className="col-9">
                        <Calendar handleDateClick={this.handleDateClick} />
                    </div>
                    <div className="col-3">
                        <TimeListing handleTimeSelection={this.props.setSelectedTime} timeSlots={this.state.timeSlots} service={this.props.service} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DateTimeSelector;