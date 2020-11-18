import React from 'react';
import './CalendarBox.css';

const CalendarBox = (props) => {
    let { date } = props
    let dateString = date.toLocaleDateString()
    return (
        <div className="calendar-box-container">
            <div className="row text-center">
                <div className="col-12">
                    {dateString}
                </div>
            </div>
        </div>
    )
}

export default CalendarBox;