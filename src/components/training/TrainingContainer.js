import React, { Component } from 'react';
import './TrainingContainer.css';
import TrainingService from './trainingService/TrainingService';

class TrainingContainer extends Component {

    render() {
        const trainingNames = [
            {name:"Classic Eyelash Training + Certification"},
            {name: "Hybrid/Volume Eyelash Course + Certification"}
        ]
        return (
            <div className="container training-container">
                <h1 id="training-heading">Become a Lash Specialists</h1>
                <div className="row">
                    <div className="col-8" id="training-description-col">
                        First things first, research your state's lash technician licensing regulations. Most states require that you have a cosmetology or an esthetician license. Olloqui will cover everything you need to know to start your career as a certified lash technician. Trust that your investment in our training and product lines will advance your business. Are you ready to LOVE WHAT YOU SEE AND DO WHAT YOU LOVE?
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <TrainingService trainingName={trainingNames[0].name} />
                    </div>
                    <div className="col-6">
                        <TrainingService trainingName={trainingNames[1].name}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingContainer;