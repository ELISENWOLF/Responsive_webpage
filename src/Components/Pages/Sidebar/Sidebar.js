import React from 'react'
import "./Sidebar.css"
import { RiHomeLine } from 'react-icons/ri'
import { RiBarChartBoxLine } from 'react-icons/ri'
import { IoMailOutline } from 'react-icons/io5'
import { CgNotes } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-brand'>
            <h2 className='head'>A C M E</h2>
        </div>

        <div className='sidebar-menu'>
          <div className='btn-sidebar'>
            <ul>
              <li><a href='/home'><RiHomeLine className='side-icon'/><span>Home</span></a></li>
            </ul>
          </div>
          <div className='btn-sidebar'>
          <ul>
              <li><a href='/' className='active'><RiBarChartBoxLine className='side-icon'/><span>Dashboard</span></a></li>
            </ul>
          </div>
          <div className='btn-sidebar'>
          <ul>
              <li><a href='/inbox'><IoMailOutline className='side-icon'/><span>Inbox</span><span className='new-msg'>New</span></a></li>
            </ul>
          </div>
          <div className='btn-sidebar'>
          <ul>
              <li><a href='/product'><CgNotes className='side-icon'/><span>Products</span></a></li>
            </ul>
          </div>
          <div className='btn-sidebar'>
          <ul>
              <li><a href='/admin'><IoSettingsOutline className='side-icon'/><span>Admin</span></a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar