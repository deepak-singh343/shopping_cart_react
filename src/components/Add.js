import React, { Component } from 'react';
import {addNewProduct} from '../actions/products';
import {connect} from 'react-redux';
class  Add extends Component {
    //first commit
    constructor(props)
    {
        super(props);
        this.state={
            product:{
                id:'',
                name:'',
                imgUrl:'',
                price:'',
                description:''
            }
        };
    }
    handleInputChange=(field,value)=>{
        this.setState({[field]:value});
    }
    addProduct=(event)=>
    {
        event.preventDefault();
        const {product}=this.state;
        const{name,imgUrl,price,description}=this.state;
        product.id=parseInt((Math.random() * 1000), 10)
        product.name=name;
        product.imgUrl=imgUrl;
        product.price=price;
        product.description=description;
        product.quantity=0;
        this.setState({
           product:product 
        });
        let inputs=document.querySelectorAll('input');
        inputs.forEach(input=>input.value='');
        this.props.dispatch(addNewProduct(product));
    }
    
    render(){
        return (
            
            <div className='add-product-container'>
                <form className='add-product'>
                    <span className='heading'>Add a Product</span>
                    <div className='field'>
                        <div className='label'>
                            Name
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Enter title of Task' required onChange={(e)=>this.handleInputChange('name',e.target.value)}/>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='label'>
                            Image Link
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Enter stats' required onChange={(e)=>this.handleInputChange('imgUrl',e.target.value)}/>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='label'>
                            Price
                        </div>
                        <div className='input-field'>
                            <input type='number' placeholder='Enter Price of Product' required onChange={(e)=>this.handleInputChange('price',e.target.value)}/>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='label'>
                            Description
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Enter Description of Product' required onChange={(e)=>this.handleInputChange('description',e.target.value)}/>
                        </div>
                    </div>
                    <button id='add-btn' onClick={this.addProduct}>ADD</button>
                </form>
            </div>
        );
    }
    
}
const mapStateToProps=({products})=>({
    products
});

export default connect(mapStateToProps)(Add);