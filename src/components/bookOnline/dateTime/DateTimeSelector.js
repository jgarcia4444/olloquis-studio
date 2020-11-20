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
        let times = [
            {
                from: 8,
                to: 10
            },
            {
                from: 10,
                to: 12
            },
            {
                from: 12,
                to: 14
            },
            {
                from: 14,
                to: 16
            },
            {
                from: 16,
                to: 18
            }
        ]
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
                        <TimeListing timeSlots={this.state.timeSlots} service={this.props.service} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DateTimeSelector;