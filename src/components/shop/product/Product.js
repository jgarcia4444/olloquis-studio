import './Product.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../../redux/actions/addToCart'

class Product extends Component {

    state = {
        quantitySelect: 0,
        showErrorModal: false
    }

    handleSelectChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleAddToCart = () => {
        if (this.state.quantitySelect === 0) {
            this.setState({
                ...this.state,
                showErrorModal: true
            })
        } else {
            this.props.addToCart({
                quantity: this.state.quantitySelect,
                product: this.props.product
            })
            this.setState({
                quantitySelect: 0
            })
        }
    }

    renderQuantityOptions = () => {
        const quantityRange = [...Array(21).keys()];
        return (
            <select onChange={this.handleSelectChange} name="quantitySelect" className="form-control quantity-select" value={this.state.quantitySelect}>
                {quantityRange.map((quantity, i) => {
                    return <option key={i} className="quantity-selection" name={"quantity_" + quantity} value={quantity}>{quantity}</option>
                })}
            </select>
        )
        
    }

    setModalToFalse = () => {
        this.setState({
            ...this.state,
            showErrorModal: false
        })
    }

    closeErrorModal = (e) => {
        let parentContainer = e.target.parentNode
        parentContainer.classList.add("disappear")
        setTimeout(this.setModalToFalse, 500)
    }

    render() {
        
        const {product} = this.props
        return (
            <div className='product-container'>
            {this.state.showErrorModal ?
                <div className="container-fluid quantity-error-container">
                    <div onClick={this.closeErrorModal} className="close-button-container">
                        X
                    </div>
                    <div className="quantity-error-message">
                        Please specify the quantity
                    </div>
                </div>
             : null}
            
                <div className="row text-center">
                    <div className="col-12 product-col">
                        <img className="product-image" src={product.imgSRC} alt={product.name} />
                    </div>
                </div>
                <div className="container product-details-container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="product-name">
                                {product.name}
                            </h4>
                        </div>
                        <div className="col-12">
                            <p className="product-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum explicabo, beatae voluptate rem aliquam maiores obcaecati, aspernatur et laudantium officia provident aperiam fugit eveniet vel quos id eaque tempora.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                Quantity:                                
                            </label>
                            {this.renderQuantityOptions()}
                        </div>
                        <div className="col-6">
                            <button onClick={this.handleAddToCart} className="add-to-cart-button">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch(addToCart(item))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Product)