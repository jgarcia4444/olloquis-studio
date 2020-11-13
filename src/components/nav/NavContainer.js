import React, { Component } from 'react';
import './NavContainer.css';
import { Link } from 'react-router-dom';

class NavContainer extends Component {

    state = {
        route: ""
    }

    formatNameAttribute = (option) => {
        var name;
        let optionArray = option.split(" ")
        if (optionArray.length > 1) {
            name = optionArray.join("-").toLowerCase()
        } else {
            name = optionArray.join("").toLowerCase()
        }
        return name
    }

    renderNavLinks = (navOptions) => {
        return navOptions.map(option => {
            let nameAttribute = this.formatNameAttribute(option)
            return (
                <div key={nameAttribute} name={nameAttribute} className="col-3">
                    <Link to={"/" + nameAttribute}>{option}</Link>
                </div>
            )
        })
    }

    render() {

        const navOptions = ["Home", "Book Online", "Shop", "Training"]

        return (
            <div className="row nav-container-row text-center"> 
                {this.renderNavLinks(navOptions)}
            </div>
        )
    }
}

export default NavContainer;