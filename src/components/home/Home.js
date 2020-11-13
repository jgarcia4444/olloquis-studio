import React, { Component } from 'react';
import Logo from '../../imgs/Logo.png';
import './Home.css';
import NavContainer from '../nav/NavContainer';

class Home extends Component {

    render() {

        return (
            <div className="container Home">
                <NavContainer />
                <div className="row text-center">
                    <div className="col-12 logo-col">
                        <img className="Logo" src={Logo} alt="Logo" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;