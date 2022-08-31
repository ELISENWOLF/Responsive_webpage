import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Admin.css'

function Admin() {
  return (
    <div className='container'>
        <div className='left-container'>
            <Sidebar />
        </div>
        <div className='right-container'>
            Admin
        </div>
    </div>
  )
}

export default Admin