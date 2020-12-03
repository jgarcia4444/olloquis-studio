import './TrainingService.css';
import React, { Component } from 'react';
import Lashes from '../../../imgs/Lashes.jpeg';
import SignupForm from './signupForm/SignupForm';

class TrainingService extends Component {

    state = {
        showSignupForm: false,
        showConfirmation: false,
        confirmationMessage: ""
    }

    setupConfirmationMessage = (message) => {
        this.setState({
            showSignupForm: false,
            showConfirmation: true,
            confirmationMessage: message
        })
    }

    closeConfirmationMessage = (e) => {
        let parentContainer = e.target.parentNode;
        parentContainer.classList.add("close-signup-container");
        setTimeout(this.wipeConfirmationMessage, 700);
    }

    wipeConfirmationMessage = () => {
        this.setState({
            showConfirmation: false,
            confirmationMessage: ""
        })
    }

    render() {

        return (
            <div className="container training-service-container">
            {
                this.state.showConfirmation ? 
                    <div className="container-fluid message-after-signup-container">
                        <span onClick={this.closeConfirmationMessage} className="close-signup-message">X</span>
                        <div className="row">
                            <div className="col-6 confirm-message-col">
                                {this.state.confirmationMessage}
                            </div>
                        </div>
                    </div>
                    : 
                    null
            }
                <div className="row">
                    <div className="col-12">
                        <img className="training-image" src={Lashes} alt="Lashes" />
                    </div>
                </div>
                <div className="row training-and-signup-row">
                    <div className="col-12 training-name">
                        {this.props.trainingName}
                    </div>
                    <div className="col-12">
                        { this.state.showSignupForm ?
                        <SignupForm setupConfirmationMessage={this.setupConfirmationMessage} name={this.props.trainingName}/>
                            : 
                        <button onClick={() => this.setState({showSignupForm: true})} className="btn btn-primary signup-button">Signup</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingService;