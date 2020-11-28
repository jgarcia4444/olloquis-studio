import './Product.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../../redux/actions/addToCart'

class Product extends Component {

    render() {

        const {product} = this.props

        return (
            <div className='product-container'>
                <div className="row text-center">
                    <div className="col-8 product-col">
                        <img className="product-image" src={product.imgSRC} alt={product.name} />
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