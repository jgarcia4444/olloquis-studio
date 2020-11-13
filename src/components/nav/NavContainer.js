import React, { Component } from 'react';
import './NavContainer.css';
import { Link } from 'react-router-dom'

class NavContainer extends Component {

    state = {
        activeLinkName: ""
    }

    handleNavClick = (name) => {
        this.setState({
            ...this.state,
            activeLinkName: name
        })
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
                <div key={nameAttribute} className="col-2">
                    <Link name={nameAttribute} onClick={() => this.handleNavClick(nameAttribute)} className={this.state.activeLinkName === nameAttribute ? "nav-links active" : "nav-links"} to={"/" + nameAttribute}>{option}</Link>
                </div>
            )
        })
    }

    render() {

        const navOptions = ["Home", "About", "Book Online", "Shop", "Training", "Contact"]

        return (
            <div className="row text-center nav-container-row"> 
                {this.renderNavLinks(navOptions)}
            </div>
        )
    }
}

export default NavContainer;