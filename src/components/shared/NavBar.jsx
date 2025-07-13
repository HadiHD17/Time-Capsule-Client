import React from 'react'
import '../../styles/Navbar.css'
import CreateButton from './CreateButton'
import PublicWallButton from './PublicWallButton'
import LogoutButton from './LogoutButton'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='Title'>
        <h1>⏰ Time Capsule</h1>
      </div>
      <div className='Actions'>
        <CreateButton/>
        <PublicWallButton/>
        <LogoutButton/>
      </div>
    </div>
  )
}

export default NavBar