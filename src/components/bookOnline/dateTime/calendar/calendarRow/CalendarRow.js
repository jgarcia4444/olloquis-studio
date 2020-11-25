import React, { Component } from 'react';
import './CalendarRow.css';
import CalendarBox from './calendarBox/CalendarBox'

class CalendarRow extends Component {

    renderRow = () => {
        return this.props.dates.map((date, i) => {
            return <CalendarBox timeListingsByDate={this.props.timeListingsByDate[date.getDate()]} handleDateClick={this.props.handleDateClick} date={date} key={i} />
        })
    }

    render() {

        return (
            <div className="row calendar-row-container">
                {this.renderRow()}
            </div>
        )
    }
}

export default CalendarRow;