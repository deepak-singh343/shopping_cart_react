import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateProductDescription, deleteProduct,increaseQuantity,decreaseQuantity} from '../actions/products';
class Product extends Component {
    increase=()=>{
        
        const {products}=this.props;
        const {product}=this.props;
        const index=products.list.indexOf(product);
        products.list[index].quantity+=1;
        this.props.dispatch(increaseQuantity(product,index));
    }
    decrease=()=>{
        const {products}=this.props;
        const {product}=this.props;
        const index=products.list.indexOf(product);
        if(product.quantity===0)
        {
            return;
        }
        products.list[index].quantity-=1;
        this.props.dispatch(decreaseQuantity(product,index));
    }
    edit=()=>{
        const product=this.props;
        var images=document.getElementsByClassName('pic');
        var index=0;
        for(let i=0;i<images.length;i++)
        {
           
            if(product.product.imgUrl===(images[i].src))
            {
                index=i;
            }
        }
        var desc=document.getElementsByClassName('description');
        var selectedDesc=desc[index];
        selectedDesc.style.border='1px solid black';
        selectedDesc.setAttribute('contentEditable','true');
        var savebtns=document.getElementsByClassName('save-btn');
        var selectedsavebtn=savebtns[index];
        selectedsavebtn.style.display='block';    
        var editbtn=document.getElementsByClassName('edit');
        var selectededitbtn=editbtn[index];
        selectededitbtn.style.display='none'; 
    }
    save=()=>
        {
            const product=this.props;
            var images=document.getElementsByClassName('pic');
            var index=0;
            for(let i=0;i<images.length;i++)
            {
            
                if(product.product.imgUrl===(images[i].src))
                {
                    index=i;
                }
            }
            var editbtn=document.getElementsByClassName('edit');
            var selectededitbtn=editbtn[index];
            selectededitbtn.style.display='block'; 
             var savebtn=document.getElementsByClassName('save-btn');
             var selectedsavebtn=savebtn[index];
             selectedsavebtn.style.display='none';
             var desc=document.getElementsByClassName('description');
             var selectedDesc=desc[index];
             product.product.description=selectedDesc.innerText;
             selectedDesc.setAttribute('contentEditable','false');
             selectedDesc.style.border='none';
            this.props.dispatch(updateProductDescription(product,index));
        }
    delete=()=>{
        const product=this.props;
        this.props.dispatch(deleteProduct(product));
    }
    render() {
        const { product } = this.props;
        return (
            <div className="product-container">
                <div className="left-part">
                    <div className="image">
                        <img src={product.imgUrl} alt="product-pic" className="pic" />
                    </div>
                    <div className="About">
                        <div className="name">
                            <span>
                                {product.name}
                            </span>
                        </div>
                        <div className="price">
                            <span>
                                Rs.{product.price}
                            </span>
                        </div>
                    </div>
                    <div className="quantity">
                        <div className="quan">
                            Qty:{product.quantity}
                        </div>
                        <div className="operations">
                            <div className="inc" onClick={this.increase}>
                                <img src="https://image.flaticon.com/icons/svg/148/148764.svg" alt="increase"/>
                            </div>
                            <div className="dec" onClick={this.decrease}>
                                <img src="https://image.flaticon.com/icons/svg/992/992514.svg" alt="dec"/>
                            </div>
                        </div>
                    </div>
                        {/* <button className="addTocart">Add To Cart</button> */}
                </div>
                <div id="right-part">
                    <div className='description' contentEditable="false">
                            {product.description}
                    </div>       
                    <button className='save-btn' onClick={this.save}>save</button> 
                    <div className='icons'>
                        <div className='edit-delete' onClick={this.edit}>
                            <button className='edit'>
                                <img src='https://image.flaticon.com/icons/svg/715/715750.svg' alt='edit' />
                            </button>
                            
                        </div>
                        <div className='edit-delete'>
                            
                            <img src='https://image.flaticon.com/icons/svg/3221/3221897.svg' alt='delete' onClick={this.delete}/>
                        </div>
                    </div>      
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
export default connect (mapStateToProps)(Product);