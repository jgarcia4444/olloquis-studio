import './CartCardContainer.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import shoppingCart from '../../imgs/icons/shoppingCart.png'
import {NavLink as Link} from 'react-router-dom';

class CartCardContainer extends Component {

    renderCartQuantity = () => {
        let {cartItems} = this.props
        if (cartItems.length === 0) {
            return null;
        } else {
            let quantities = cartItems.map(item => item.quantity);
            var sum = 0;
            quantities.forEach(num => sum += num);
            return sum;
        }
    }

    showCartDetailsContainer = () => {
        window.location.pathName = "/cart-details"
    }

    render() {
        return (
            <div className="container cart-card-container">
            <Link to="/cart-details" id="cart-link">
                <div className="row text-center">
                    <div className="col-12">
                        <span id="cart-items-total">{this.renderCartQuantity()}</span><img src={shoppingCart} alt="shopping cart" width="60" />
                    </div>
                </div>
            </Link>
                
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