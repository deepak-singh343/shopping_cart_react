import React, { Component } from 'react';
import ProductsList from './ProductsList';

class Home extends Component {
    render() {
        const { products } = this.props;
        return (
            <div>
                <ProductsList products={products}/>
            </div>
        );
    }
}

export default Home;