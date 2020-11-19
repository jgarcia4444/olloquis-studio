import React, { Component } from 'react';
import "./Calendar.css";
import CalendarControls from './calendarControls/CalendarControls';
import CalendarRow from './calendarRow/CalendarRow';

class Calendar extends Component {

    state = {
        startDate: new Date(),
        dates: []
    }

    componentDidMount() {
        this.getSevenDays(this.state.startDate)
    }

    getSevenDays = (startDate) => {
        var dates = [startDate]
        for (let i = 0; i < 6; i++) {
            let previousDate = new Date(dates[i])
            let newUTC = previousDate.setDate(previousDate.getDate() + 1)
            let newDate = new Date(newUTC)
            dates.push(newDate)
        }
        this.setState({
            ...this.state,
            startDate: startDate,
            dates: dates
        })
    }

    handleControlClick = (value) => {
       if (value === "back") {
           let { startDate } = this.state
           let todaysDate = new Date()
           let startDateMonth = startDate.getMonth()
           let todaysDateMonth = todaysDate.getMonth()
           let startDateNum = startDate.getDate()
           let todaysDateNum = todaysDate.getDate()
           if (startDateMonth === todaysDateMonth) {
                if (startDateNum - todaysDateNum > 5) {
                    let newStartDate = new Date(startDate)
                    newStartDate.setDate(newStartDate.getDate() - 7)
                    this.getSevenDays(newStartDate)
                } else {
                    let newStartDate = new Date()
                    this.getSevenDays(newStartDate)
                }
           } else {
                let newStartDate = new Date(startDate)
                newStartDate.setDate(newStartDate.getDate() - 7)
                this.getSevenDays(newStartDate)
           }
           
       } else if (value === "next") {
           let { dates } = this.state
           let newStartDate = new Date(dates[dates.length - 1])
           newStartDate.setDate(newStartDate.getDate() + 1)
           this.getSevenDays(newStartDate)
       }
    }

    render() {
        return (
            <div className="container calendar-container">
                <div className="row calendar-container-row">
                    <div className="col-8">
                        <CalendarControls handleControlClick={this.handleControlClick} />
                        <CalendarRow dates={this.state.dates} />
                    </div>
                    <div className="col-4">
                        Time Listing
                    </div>
                </div>
                    
            </div>
        )
    }
}
export default Calendar