import './ProductInCart.css';
import React, { Component } from 'react';

class ProductInCart extends Component {

    render() {
        const { item } = this.props
        return (
            <div className="container product-in-cart-container">
                <div className="row">
                    <div className="col-6">
                        <h3>{item.product.name}</h3>
                    </div>
                    <div className="col-6">
                        <h3>Quantity: {item.quantity}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="product-in-cart-image" src={item.product.imgSRC} alt={item.product.name} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductInCart;