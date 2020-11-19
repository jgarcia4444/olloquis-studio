import React, { Component } from 'react';
import './CalendarControls.css';

class CalendarControls extends Component {

    handleControlClick = (value) => {
        this.props.handleControlClick(value)
    }

    render() {

        return (
            <div className="row calendar-controls-row">
                <div  onClick={() => this.handleControlClick("back")} className="col-6" id="calendar-back-button">
                    Back
                </div>
                <div onClick={() => this.handleControlClick("next")} className="col-6" id="calendar-forward-button">
                    Next
                </div>
            </div>
        )
    }
}

export default CalendarControls;