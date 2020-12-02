import './ProductInCart.css';
import React, { Component } from 'react';
import EditForm from './editForm/EditForm';

class ProductInCart extends Component {

    state = {
        showEditQuantity: false
    }

    handleEditClick = () => {
        this.setState({
            showEditQuantity: true
        })
    }

    updateProductQuantity = (newQuantity) => {

    }

    render() {
        const { item } = this.props
        return (
            <div className="container product-in-cart-container">
                <div className="row">
                    <div className="col-6">
                        <h3>{item.product.name}</h3>
                    </div>
                    <div className="col-6">
                        <div className="container quantity-of-product-in-cart-container">
                            <div className="row">
                                <div className="col-8">
                                    <h3>Quantity: {item.quantity}</h3>
                                </div>
                                <div onClick={this.handleEditClick} className="col-2 edit-quantity-col">
                                {this.state.showEditQuantity ? <EditForm updateQuantity={this.updateProductQuantity} /> : "Edit"}
                                </div>
                                <div className="col-2 delete-item-col">
                                    Remove
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="product-in-cart-image" src={item.product.imgSRC} alt={item.product.name} />
                    </div>
                    <div className="col-8 product-in-cart-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero odit, veritatis eius sit sint ab architecto sequi ea commodi iusto voluptas consectetur ut, fugiat eum mollitia quaerat. Repellendus, doloribus.
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductInCart;