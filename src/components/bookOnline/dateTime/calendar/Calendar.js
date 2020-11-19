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

    monthsMatching = (firstDate, secondDate) => {
        let startDateMonth = firstDate.getMonth()
        let todaysDateMonth = secondDate.getMonth()
        if (startDateMonth === todaysDateMonth) {
            return true
        } else {
            return false
        }
    }

    sevenDaysToCurrentDay = (firstDate, secondDate) => {
        let startDateNum = firstDate.getDate()
        let todaysDateNum = secondDate.getDate()
        if (startDateNum - todaysDateNum > 5) {
            return true
        } else {
            return false
        }
    }

    getPreviousSevenDays = (startDate) => {
        let newStartDate = new Date(startDate)
        newStartDate.setDate(newStartDate.getDate() - 7)
        this.getSevenDays(newStartDate)
    }

    handleControlClick = (value) => {
       if (value === "back") {
           let { startDate } = this.state
           let todaysDate = new Date()
           if (this.monthsMatching(startDate, todaysDate)) {
                if (this.sevenDaysToCurrentDay(startDate, todaysDate)) {
                    this.getPreviousSevenDays(startDate)
                } else {
                    this.getSevenDays(todaysDate)
                }
           } else {
                this.getPreviousSevenDays(startDate)
           }
       } else if (value === "next") {
           let { startDate } = this.state
           let newStartDate = new Date(startDate)
           newStartDate.setDate(newStartDate.getDate() + 7)
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