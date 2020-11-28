import './CartCardContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import shoppingCart from '../../imgs/icons/shoppingCart.png'

class CartCardContainer extends Component {

    render() {
        return (
            <div className="container cart-card-container">
                <div className="row text-center">
                    <div className="col-12">
                        <span id="cart-items-total">{this.props.cartItems.length !== 0 ? this.props.cartItems.length : null}</span><img src={shoppingCart} alt="shopping cart" width="60" />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(
    mapStateToProps,
    null
)
(CartCardContainer);