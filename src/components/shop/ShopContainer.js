import React, { Component } from 'react';
import './ShopContainer.css';
import ProductData from '../../ProductData';
import Product from './product/Product'

class ShopContainer extends Component {

    state = {
        products: ProductData
    }

    renderProducts = (products) => {
        console.log(products)
        return (
            <div className="row">
                {products.map((product, i) => {
            return (
                <div key={i} className="col-6">
                    <Product product={product} />
                </div>
            )  
        })}
            </div>
        )
        
    }

    render() {

        return (
            <div className="container shop-container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1>Shop Products</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <div className="container products-container">
                            {this.renderProducts(this.state.products)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopContainer;