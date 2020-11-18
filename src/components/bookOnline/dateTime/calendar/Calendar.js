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
        let dates = this.getSevenDays(this.state.todaysDate)
        this.setState({
            ...this.state,
            dates: dates
        })
    }

    getSevenDays = (startDate) => {
        var dates = [this.state.todaysDate]
        for (let i = 0; i < 7; i++) {
            let previousDate = new Date(dates[i])
            let newUTC = previousDate.setDate(previousDate.getDate() + 1)
            let newDate = new Date(newUTC)
            dates.push(newDate)
        }
        return dates
    }


    render() {
        return (
            <div className="container calendar-container">
                <div className="row calendar-container-row">
                    <div className="col-9">
                        <CalendarControls />
                        <CalendarRow dates={this.state.dates} />
                    </div>
                    <div className="col-3">
                        Time Listing
                    </div>
                </div>
                    
            </div>
        )
    }
}
export default Calendar