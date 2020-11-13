import React, { Component } from 'react';
import './NavContainer.css';

class NavContainer extends Component {


    render() {

        return (
            <div className="row nav-container-row text-center"> 
                <div className="col-3">Home</div>
                <div className="col-3">Book Online</div>
                <div className="col-3">Shop</div>
                <div className="col-3">Training</div>
            </div>
        )
    }
}

export default NavContainer;