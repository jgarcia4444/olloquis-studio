import './CartDetailsContainer.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartDetailsContainer extends Component {

    render() {
        console.log(this.props.cart)
        return (
            <div className="container cart-details-container">
                <h1>Cart Details</h1>
                {this.props.cart.map(item => {
                    return <h3>{item.product.name} quantity: {item.quantity}</h3>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cartItems
    }
} 

export default connect(
    mapStateToProps,
    null
)(CartDetailsContainer);