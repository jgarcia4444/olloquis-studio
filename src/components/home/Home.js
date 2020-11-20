import React, { Component } from 'react';
import Logo from '../../imgs/Logo.png';
import './Home.css';
import Lashes from '../../imgs/Lashes.jpeg'

class Home extends Component {

    render() {

        return (
            <div className="container Home"> 
                <div className="row text-center">
                    <div className="col-12 logo-col">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className="row home-main-container">
                    <div className="col-6">
                        <div className="container home-intro-container">
                            <div className="row">
                                <div className="col-10 intro-col">
                                   <h2 id="intro-container-header">
                                       Eyelash Extensions
                                   </h2> 
                                   <p id="intro-container-paragraph">
                                   If applied properly, they are safe and do not ruin your natural lash. Eyelash extensions instantly enhance your eyes, in fact with proper care they can last up to 3/4 weeks.
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container home-guarantee-container ">
                            <div className="row text-center">
                                <div className="col-10 guarantee-img-col">
                                    <img className="lashes-img" src={Lashes} alt="Lashes example"/>
                                </div>
                            </div>
                            <div className="row text-center guarantee-details-row">
                                <div className="col-10 guarantee-details-col">
                                    <h5 id="guarantee-details">YOUR NEW FAVORITE LASH APPLICATION</h5>
                                    <h3 id="guarantee-header">GUARANTEED!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;