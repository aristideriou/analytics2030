import './App.css';

import React, { Component } from 'react';
import Basket from './Basket';
import Header from './Header';
import Product from './Product';

import products from './data/products';

const initialState = {
  basket : 30,
  products : products,
  transaction : {
    id : 123,
    products : {}
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  render(){
    return(
      <div>
      <h1>Header de l'app</h1>
      <Header />
      <Basket amount={this.state.basket} />
      <Product />
      </div>
      )  
    }
  }
  
  export default App;
  