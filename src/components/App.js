import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  CartCount=()=>{
    const {products}=this.props.list;
    let count=0;
    products.list.forEach(product => {
      count+=product.quantity;
    });
    return count;
  }
  CartTotal=()=>{
    const {products}=this.props.list;
    let total=0;
    products.list.forEach(product => {
      if(product.quantity>0)
      {
          total+=product.quantity*product.price;
      }
      
    });
    return total;
  }
  render() {
    const { products } = this.props.list;
    return (
      <Router>
            <div>
              <Navbar CartCount={this.CartCount()} CartTotal={this.CartTotal()}/>
              <Switch>
                  <Route path='/shopping_cart_react' render={(props)=>{
                        return(
                          <Home products={products}/>
                        )
                  }}/>
                  <Route path='/add' component={Add}/>
              </Switch>  
          </div>
      </Router>
    );
  }

}
function mapStateToProps(state) {
  return {
    list: state
  }
}
export default connect(mapStateToProps)(App);
