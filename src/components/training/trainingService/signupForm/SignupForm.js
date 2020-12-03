import './SignupForm.css';
import React, { Component } from 'react';

class SignupForm extends Component {

    state = {
        fName: "",
        lName: "",
        licensed: false,
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSignupSubmit = (e) => {
        e.preventDefault();
        let backendObject = this.setUpStateForBackend();
        let options = this.optionsForSignupPost(backendObject);
        this.postToBackend(options)
    }

    postToBackend = (options) => {
        fetch("http://localhost:3000/trainings", options)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    let confirmMessage = `${this.state.fName} ${this.state.lName}, thank you for signing up for ${this.props.name}. We will email you with further instructions.`
                    this.props.setupConfirmationMessage(confirmMessage)
                } else {
                    let confirmMessage = "Sorry there was an error trying to sign you up for training."
                    this.props.setupConfirmationMessage(confirmMessage)
                }
            })
    }

    optionsForSignupPost = (signupObject) => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(signupObject)
        }
        return options
    }

    setUpStateForBackend = () => {
        const backendSignupObject = {
            first_name: this.state.fName,
            last_name: this.state.lName,
            email: this.state.email,
            licensed: this.state.licensed,
            training_name: this.props.name
        }
        return backendSignupObject;
    }

    handleCheckboxClick = () => {
        this.setState({
            ...this.state,
            licensed: !this.state.licensed
        })
    }

    render() {
        
        return (
            <div className="container signup-form-container">
                <form onSubmit={this.handleSignupSubmit}>
                    <div className="row form-group">
                        <div className="col-6">
                            <label htmlFor={"fName_" + this.props.name}>First Name</label>
                            <input id={"fName_" + this.props.name} className="form-control" type="text" name="fName" value={this.state.fName} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-6">
                            <label htmlFor={"lName_" + this.props.name}>Last Name</label>
                            <input id={"lName_" + this.props.name} className="form-control" type="text" name="lName" value={this.state.lName} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-12 signup-email-col">
                            <label htmlFor={"email_" + this.props.name}>Email</label>
                            <input type="email" name="email" className="form-control" id={"email_" + this.props.name} value={this.state.eamil} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-2">
                            <input type="checkbox" name="licensed" defaultChecked={this.state.licensed} onChange={this.handleCheckboxClick}/>
                        </div>
                        <div className="col-10 licensed-question">
                            Are you a licensed Cosmetologist or Esthetician
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-12 signup-submit-col">
                            <button type="submit" className="btn btn-primary signup-submit-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;