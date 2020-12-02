import './TrainingService.css';
import React, { Component } from 'react';
import Lashes from '../../../imgs/Lashes.jpeg';

class TrainingService extends Component {

    render() {

        return (
            <div className="container training-service-container">
                <div className="row">
                    <div className="col-12">
                        <img className="training-image" src={Lashes} alt="Lashes" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingService;