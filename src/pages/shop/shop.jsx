import React, { Component } from 'react'
import SHOP_DATA from './shopdata'

export default class shop extends Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    return (
      <div>
        shop!
      </div>
    )
  }
}
