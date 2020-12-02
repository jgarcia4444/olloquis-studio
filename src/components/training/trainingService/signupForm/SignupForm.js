import './SignupForm.css';
import React, { Component } from 'react';

class SignupForm extends Component {

    state = {
        fName: "",
        lName: "",
        licensed: false
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSignupSubmit = () => {
        console.log("Hello World")
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
                            <label htmlFor="fName">First Name</label>
                            <input id="fName" className="form-control" type="text" name="fName" value={this.state.fName} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lName">Last Name</label>
                            <input id="lName" className="form-control" type="text" name="lName" value={this.state.lName} onChange={this.handleInputChange} />
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
                </form>
            </div>
        )
    }
}

export default SignupForm;