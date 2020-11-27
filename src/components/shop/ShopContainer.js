import React, { Component } from 'react';
import './ShopContainer.css';
import ProductData from '../../ProductData';

class ShopContainer extends Component {

    state = {
        products: ProductData
    }

    renderProducts = (products) => {
        console.log(products)
        return products.map((product, i) => {
            if (i % 2 === 0 && i !== products.length - 1) {
                let nextProduct = products[i + 1]
                return (
                    <div className="row">
                        <div className="col-6 product-col">
                            <div className="product-container">
                                <h3>{nextProduct.name}</h3>
                                <img className="product-image" src={nextProduct.imgSRC} alt={nextProduct.name} />
                            </div>
                        </div>
                        <div className="col-6 product-col">
                            <div className="product-container">
                                <h3>{product.name}</h3>
                                <img className="product-image" src={product.imgSRC} alt={product.name} />
                            </div>
                        </div>
                    </div>
                )  
            } else if (i === products.length - 1) {
                return (
                    <div className="row text-center">
                        <div className="col-12 product-col">
                        <div className="product-container">
                            <h3>{product.name}</h3>
                            <img className="product-image" src={product.imgSRC} alt={product.name} />
                        </div>
                            
                        </div>
                    </div>
                )
            }
        })
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