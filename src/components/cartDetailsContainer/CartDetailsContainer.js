import './CartDetailsContainer.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInCart from './productInCart/ProductInCart';

class CartDetailsContainer extends Component {

    renderCartProducts = () => {
        const { cart } = this.props;
        return cart.map(item => {
            return (
                <ProductInCart item={item} />
            )
        })
    }

    render() {
        console.log(this.props.cart)
        return (
            <div className="container cart-details-container">
                <div className="row cart-details-title-row">
                    <div className="col-12 cart-details-title-col">
                        <h1>Cart Details</h1>
                    </div>
                </div>
                <div className="container products-in-cart-container">
                    {this.renderCartProducts()}
                </div>
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