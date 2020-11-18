import React, { Component } from 'react';
import './CalendarRow.css';
import CalendarBox from './calendarBox/CalendarBox'

class CalendarRow extends Component {

    // renderRow = () => {
    //     return this.props.dates.map(date => {
    //         return <CalendarBox date={date} />
    //     })
    // }

    render() {

        return (
            <div className="container calendar-row-container">
                {/* {this.renderRow()} */}
                Hola
            </div>
        )
    }
}

export default CalendarRow;