import React from 'react'
import "../../styles/Navbar.css"
import LogButton from './LogButton';
import RegisterButton from './RegisterButton';

const NavigationHome = () => {
  return (
    <div className='NavBar'>
      <div className='Heading'>
        <h1>⏰ Time Capsule</h1>
      </div>
      <div className='Actions'>
        <LogButton/>
        <RegisterButton/>
      </div>
    </div>
  )
}

export default NavigationHome