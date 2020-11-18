import React, { Component } from 'react';
import "./Calendar.css";
import CalendarControls from './calendarControls/CalendarControls';
import CalendarRow from './calendarRow/CalendarRow';

class Calendar extends Component {

    state = {
        todaysDate: new Date(),
        dates: []
    }

    componentDidMount() {
        var dates = [this.state.todaysDate]
        for (let i = 0; i < 7; i++) {
            let previousDate = new Date(dates[i])
            let newUTC = previousDate.setDate(previousDate.getDate() + 1)
            let newDate = new Date(newUTC)
            dates.push(newDate)
        }
        this.setState({
            ...this.state,
            dates: dates
        })
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