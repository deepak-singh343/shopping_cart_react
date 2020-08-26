import Product from './Product';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {sortProducts,updateProducts} from '../actions/products';
class ProductsList extends Component {
    
    onSort=()=>{
        const cancelbtn=document.getElementById('cancel');
        cancelbtn.style.display='block';
        const products=[].concat(this.props.products.list);
        products.sort((a, b) => (a.price-b.price));
        this.props.dispatch(sortProducts(products));
    }


    cancel=()=>{
        const productsobj=this.props;
        const products=[].concat(productsobj.products.list);
        const cancelbtn=document.getElementById('cancel');
        cancelbtn.style.display='none';
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            url = 'http://my-json-server.typicode.com/deepak-singh343/productdb/db'
        fetch(proxyUrl + url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const allproducts=[].concat(data.Products);
                console.log(products);
                var originalproducts=[];
                for(var k=0;k<products.length;k++)
                {
                    for(var l=0;l<allproducts.length;l++)
                    {
                        console.log('k=',k,'l=',l);
                        // console.log('new',products[k]);
                        if(JSON.stringify(allproducts[l].id) === JSON.stringify(products[k].id))
                        {
                            
                            // console.log('all',allproducts[l]);
                            break;
                        }
                    }
                    console.log(l);
                    if(l===allproducts.length)
                    {
                        console.log('l',l);
                        console.log('added product',products[k]);
                        originalproducts.push(products[k]);
                    }
                }
                for(var i=0;i<allproducts.length;i++)
                {
                    for(var j=0;j<products.length;j++)
                    {
                        if(JSON.stringify(products[j].id) === JSON.stringify(allproducts[i].id))
                        {
                            allproducts[i].quantity=products[j].quantity;
                            allproducts[i].description=products[j].description;
                            originalproducts.push(allproducts[i]);
                            break;
                        }
                    }
                }
                this.props.dispatch(updateProducts(originalproducts));
            })
    }

    render() {
        let { products } = this.props;
        products=products.list;
        const productList=products.length?(
            products.map((product,index) => 
                <Product product={product} key={index}/>
            )
        ):(<div id='loading'>
                Loading
            </div>)
        return (
            <div>  
                <div className="products-list">
                    <div id='sort'>
                        <div id='sorting' onClick={this.onSort}>
                            <button>
                                Sort By Price
                            </button>
                        </div>
                        <div id='cancel' onClick={this.cancel}>
                            <img src='https://image.flaticon.com/icons/svg/1828/1828665.svg' alt='cancel-btn'/>
                        </div>
                    </div>
                    {productList}                
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect (mapStateToProps)(ProductsList);
