import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Product.css'

function Products() {
  return (
    <div className='container'>
        <div className='left-container'>
            <Sidebar />
        </div>
        <div className='right-container'>
            Products
        </div>
    </div>
  )
}

export default Products