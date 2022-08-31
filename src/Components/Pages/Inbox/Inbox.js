import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Inbox.css'

function Inbox() {
  return (
    <div className='container'>
        <div className='left-container'>
            <Sidebar />
        </div>
        <div className='right-container'>
            Inbox
        </div>
    </div>
  )
}

export default Inbox