import React, { Component } from 'react';
import Logo from '../../imgs/Logo.png';
import './Home.css';

class Home extends Component {

    render() {

        return (
            <div className="container Home"> 
                <div className="row text-center">
                    <div className="col-12 logo-col">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;