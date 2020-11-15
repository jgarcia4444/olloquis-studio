import React, { Component } from 'react';
import './Service.css'

class Service extends Component {


    formatPrice = (price) => {
        if (isNaN(price)) {
            return price
        } else {
            return "$" + price + ".00"
        }
        
    }

    formatDuration = (duration) => {
        if (duration > 60) {
            let hour = duration / 60
            if (hour > 1) {
                return `${hour} hrs`
            } else {
                return `${hour} hr`
            }
        } else {
            return `${duration} mins`
        }
    }

    render() {

        let formattedDuration = this.formatDuration(this.props.service.duration)
        let formattedPrice = this.formatPrice(this.props.service.price)

        return (
            <div className="container service-container">
                <div className="row service-row">
                    <div className="col-4 service-name-col">
                        <h5 className="service-name">
                            {this.props.service.name}
                        </h5>
                    </div>
                    <div className="col-4">
                        <div className="duration-and-price-container">
                            <div className="row text-center duration-and-price-titles-row">
                                <div className="col-6">
                                    <p className="duration-and-price-titles">Duration</p>
                                </div>
                                <div className="col-6">
                                    <p className="duration-and-price-titles">Price</p>
                                </div>
                            </div>
                            <div className="row text-center duration-and-price-numbers-row">
                                <div className="col-6">
                                    <p className="duration-and-price-numbers">
                                        {formattedDuration}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="duration-and-price-numbers">
                                        {formattedPrice}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <button onClick={() => this.props.handleServiceClick(this.props.service)} className="book-now-button">Book Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;