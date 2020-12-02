import './ProductInCart.css';
import React, { Component } from 'react';
import EditForm from './editForm/EditForm';
import { connect } from 'react-redux';
import removeFromCart from '../../../redux/actions/removeFromCart';
import updateQuantity from '../../../redux/actions/updateQuantity'

class ProductInCart extends Component {

    state = {
        showEditQuantity: false,
    }

    handleEditClick = () => {
        this.setState({
            ...this.state,
            showEditQuantity: true
        })
    }

    updateProductQuantity = (selectEle) => {
        let newValue = selectEle.target.value
        let { item } = this.props
        let updateObject = { 
            newQuantity: newValue, 
            itemName: item.product.name
        }
        this.props.updateQuantity(updateObject)
        this.setState({
            ...this.state,
            showEditQuantity: false
        })
    }

    removeProduct = (item) => {
        this.props.removeFromCart(item)
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
                                {this.state.showEditQuantity ? <EditForm item={item} updateProductQuantity={this.updateProductQuantity} /> : "Edit"}
                                </div>
                                <div onClick={() => this.removeProduct(item)} className="col-2 delete-item-col">
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

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item)),
        updateQuantity: (updateObject) => dispatch(updateQuantity(updateObject))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductInCart);