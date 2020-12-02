import './TrainingService.css';
import React, { Component } from 'react';
import Lashes from '../../../imgs/Lashes.jpeg';
import SignupForm from './signupForm/SignupForm';

class TrainingService extends Component {

    state = {
        showSignupForm: false
    }

    render() {

        return (
            <div className="container training-service-container">
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
                        <SignupForm />
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