import React, { Component } from 'react';
import "./Calendar.css";
import CalendarControls from './calendarControls/CalendarControls';
import CalendarRow from './calendarRow/CalendarRow';

class Calendar extends Component {

    state = {
        startDate: new Date(),
        dates: [],
        timeListingsByDate: {},
    }

    componentDidMount() {
        this.getThirtyDays(this.state.startDate)
    }

    monthOfTheYear = () => {
        let monthIndex = this.state.startDate.getMonth()
        switch(monthIndex) {
            case 0:
                return "January"
            case 1:
                return "February"
            case 2:
                return "March"
            case 3:
                return "April"
            case 4:
                return "May"
            case 5:
                return "June"     
            case 6:
                return "July"
            case 7:
                return "August"
            case 8:
                return "September"
            case 9:
                return "October"
            case 10:
                return "November"
            case 11:
                return "December"
            default:
                return "Month"
        }
    }

    getThirtyDays = (startDate) => {
        var dates = [startDate]
        for (let i = 0; i < 29; i++) {
            let previousDate = new Date(dates[i])
            let newUTC = previousDate.setDate(previousDate.getDate() + 1)
            let newDate = new Date(newUTC)
            dates.push(newDate)
        }
        this.setState({
            ...this.state,
            startDate: startDate,
            dates: dates,
        })
        this.getAvailabilty(dates)
    }

    getAvailabilty = (dates) => {
        let date = dates[0]
        let day_num = parseInt(date.getDate());
        let month_num = parseInt(date.getMonth());
        fetch(`http://localhost:3000/appointments/${month_num}/${day_num}`)
            .then(res => res.json())
            .then(data => {
                if (data.fetched === true) {
                    console.log(data.time_listings_by_date) 
                    this.setState({
                        ...this.state,
                        timeListingsByDate: data.time_listings_by_date
                    })
                } else {
                    console.log(data)
                    this.setState({
                        ...this.state,
                        errorMessage: "Error retrieving availability by dates."
                    })
                }
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

    thirtyDaysToCurrentDay = (firstDate, secondDate) => {
        let startDateNum = firstDate.getDate()
        let todaysDateNum = secondDate.getDate()
        if (startDateNum - todaysDateNum > 5) {
            return true
        } else {
            return false
        }
    }

    getPreviousThirtyDays = (startDate) => {
        let newStartDate = new Date(startDate)
        newStartDate.setDate(newStartDate.getDate() - 30)
        this.getThirtyDays(newStartDate)
    }

    handleControlClick = (value) => {
       if (value === "back") {
           let { startDate } = this.state
           let todaysDate = new Date()
           if (this.monthsMatching(startDate, todaysDate)) {
                if (this.thirtyDaysToCurrentDay(startDate, todaysDate)) {
                    this.getPreviousThirtyDays(startDate)
                } else {
                    this.getThirtyDays(todaysDate)
                }
           } else {
                this.getPreviousThirtyDays(startDate)
           }
       } else if (value === "next") {
           let { startDate } = this.state
           let newStartDate = new Date(startDate)
           newStartDate.setDate(newStartDate.getDate() + 30)
           this.getThirtyDays(newStartDate)
       }
    }

    render() {
        
        let month = this.monthOfTheYear()
        return (
            <div className="container calendar-container">
                <div className="row calendar-container-row">
                    <div className="col-12">
                        <CalendarControls handleControlClick={this.handleControlClick} />
                        <div className="row text-center calendar-month-row">
                            <div className="col-12">
                                <h4 id="calendar-month">{month}</h4>
                            </div>
                        </div>
                        <CalendarRow timeListingsByDate={this.state.timeListingsByDate} handleDateClick={this.props.handleDateClick} dates={this.state.dates} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Calendar