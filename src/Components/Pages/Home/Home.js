import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

function Home() {
  return (
    <div>
        <div className='container'>
        <div className='left-container'>
            <Sidebar />
        </div>
        <div className='right-container'>
           Home
        </div>
    </div>
    </div>
  )
}

export default Home