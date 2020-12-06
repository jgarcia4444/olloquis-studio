import React, { Component } from 'react';
import './ContactContainer.css'
import Iphone from '../../imgs/icons/iPhone_SE.png';
import Email from '../../imgs/icons/email.png';
import Location from '../../imgs/icons/Location.png';
import { NavLink  as Link} from 'react-router-dom'

class ContactContainer extends Component {

    render() {

        return (
            <div className="container contact-container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 id="contact-title">
                            Contact
                        </h1>
                    </div>
                </div>
                <div className="row contact-mediums-container">
                    <div className="col-4">
                        <div className="container-fluid">
                            <div className="row text-center">
                                {/* <div className="col-12">
                                    <h3 className="medium-title">
                                        Phone
                                    </h3>
                                </div> */}
                                <div className="col-12">
                                <a href="tel:+17602381670">
                                    <img className="medium-imgs" src={Iphone} alt="Iphone" />
                                </a>
                                    
                                </div>
                            </div>
                            <div id="call-link-row" className="row text-center">
                                <div className="col-12">
                                    <a href="tel:+17602381670" id="call-link">+1 (760) 238-1670</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container-fluid">
                            <div className="row text-center">
                                {/* <div className="col-12">
                                    <h3 className="medium-title">
                                        Email
                                    </h3>
                                </div> */}
                                <div className="col-12">
                                    <img className="medium-imgs" src={Email} alt="Email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container-fluid">
                            <div className="row text-center">
                                {/* <div className="col-12">
                                    <h3 className="medium-title">
                                        Address
                                    </h3>
                                </div> */}
                                <div className="col-12">
                                    <img className="medium-imgs" src={Location} alt="Address" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center policy-row">
                    <div className="col-12">
                        <Link to="/policies">See our privacy and covid-19 policies.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactContainer;