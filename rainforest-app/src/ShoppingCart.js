import React, { Component } from 'react'

export default class ShoppingCart extends Component {
  render() {
    return (
      <span style={{ textAlign: 'right'}}>
        Total: ${this.props.total}
      </span>
    )
  }
}
