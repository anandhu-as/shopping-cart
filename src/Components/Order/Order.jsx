import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/Order.css"
const Order = () => {
  return (
    <div className='order-container'>
        <h1>your order is placed.... 📦</h1>
        <Link to='/'>Continue shopping 	🛒</Link>
    </div>
  )
}

export default Order