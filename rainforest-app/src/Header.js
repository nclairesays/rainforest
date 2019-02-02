import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart'

export default class Header extends Component {
  render() {
    return (
<div className="App">
        <div className="App-header">
             <span> Rainforest TM  
                (<ShoppingCart total={this.props.total}/>)
            </span>
       </div>
        
      </div>
    )
  }
}
