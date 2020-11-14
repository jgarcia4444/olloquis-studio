import React, { Component } from 'react';
import Lily from '../../imgs/Lily_Olloqui.png';
import './AboutContainer.css';

class AboutContainer extends Component {

    render() {

        return (
            <div className="container About">
                <div className="row about-card-container">
                    <div className="col-4">
                        <img id="headshot" src={Lily} alt="Lily Olloqui" />
                    </div>
                    <div className="col-8">
                        <div className="container about-info-container">
                            <div className="row" >
                                <h3 id="about-name">Lilia Olloqui</h3>
                            </div>
                            <div id="about-title-row" className="row">
                                <h5 id="about-title">Lash Specialist</h5>
                            </div>
                            <div className="row">
                                <p id="about-info">
                                As a lash artist, I always strive to give my clients the very best. A huge part of that means finding quality products. Keeping in mind the length and texture of our natural lashes, I started looking for a product line just as close. Beauty should not be painful especially when dealing with the eyes. You can trust that your investment in our product and training will advance you in your career. Are you ready to LOVE WHAT YOU SEE & DO WHAT YOU LOVE?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutContainer;