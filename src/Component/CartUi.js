import React, { Component } from 'react'
import Checkout from './Checkout'
import Sidebar from './Sidebar'
 
class CartUi extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Checkout/>
            </div>
        )
    }
}

export default CartUi