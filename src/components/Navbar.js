import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../icons/logo.PNG';
const Navbar =(props)=> {  
    return (
            <div className="nav">
                <div className="left">
                    <div>
                        <span id='logo'>
                            <Link to={'/shopping_cart_react'}>
                                <img className="icon" src={logo} alt="cart-logo" />
                            </Link>
                        </span>
                    </div>
                    <div>
                    <Link to={'/shopping_cart_react'} style={{ textDecoration: 'none' }}>
                        <span className='listofproducts'>
                            Products
                        </span>
                    </Link>
                    </div>
                    <div>
                    <Link to={'/add'} style={{ textDecoration: 'none' }}>
                        <span className='add'>
                            Add product
                        </span>
                        
                            <img className="icon" src="https://image.flaticon.com/icons/svg/875/875515.svg" alt="plus" ></img>
                    </Link>
                    </div>
                </div>
                <div className="right">
                    <div className="cart">
                        <img src="https://image.flaticon.com/icons/svg/849/849532.svg" alt="cart"/>
                        <span className='cart-count'>
                            {props.CartCount}
                        </span>
                        <span className='cart-total'>
                            Total:{props.CartTotal}
                        </span>
                    </div>
                    <div id='username'>
                        Deepak
                    </div>
                    <div id='userimage'>
                        <img src='https://image.flaticon.com/icons/svg/145/145867.svg' alt='userid'/>
                    </div>
                </div>

            </div>
        );
}

export default Navbar;