import './DateTimeSelector.css';
import React, { Component } from 'react';

import Calendar from './calendar/Calendar';
import TimeListing from './timeListing/TimeListing';


class DateTimeSelector extends Component {

    state = {
        timeSlots: []
    }

    handleDateClick = (date, times) => {
        this.setState({
            ...this.state,
            timeSlots: times
        })
        this.props.setDateSelected(date)
    }

    render() {

        return (
            <div className="container date-time-container">
                <h2 id="calendar-heading">Appointment Calendar</h2>
                <div className="row calendar-and-time-row">
                    <div className="col-9">
                        <Calendar handleDateClick={this.handleDateClick}  />
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