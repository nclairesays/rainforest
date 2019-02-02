import React, { Component } from 'react'
import ProductList from './ProductList'
import Header from './Header'



export default class Container extends Component {

  constructor(){
    super()
    this.state ={
      total: 0,
      products: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => this.setState({products}) )
  }
  
  addToCart = (product) => {
    let total = this.state.total + product.price
    this.setState({ total: total})
   
  }

  render() {
    return (
      <div>
        <Header total={this.state.total}/>
        <ProductList products={this.state.products} addToCart1={this.addToCart}/>
      </div>
    )
  }
}
