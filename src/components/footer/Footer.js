import './Footer.css';
import React from 'react';

const Footer = () => {

    return (
        <div className="container-fluid footer-container">
            <div className="row footer-row">
                <div className="col-6 copyright-col">
                    &copy; 2020
                </div>
                <div className="col-6">
                    Powered by <a href="https://jgarciadev.vercel.app/" rel="noreferrer" target="_blank">JGarciaWebDev</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;