import React, { Component } from 'react';

class Service extends Component {

    render() {

        return (
            <div className="container service-container">
                <div className="col-9">
                    <h5>
                        {this.props.service.name}
                    </h5>
                </div>
            </div>
        )
    }
}

export default Service;