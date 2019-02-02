import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class ProductList extends Component {
  render() {
    return (
      <div className="ui four cards">
          {this.props.products.map( (product) => 
             <ProductCard key={product.id} {...product} addToCart2={this.props.addToCart1}/>
            )} 
      </div>
    )
  }
}
