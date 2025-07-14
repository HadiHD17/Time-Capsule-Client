import React from 'react'
import "../../styles/Navbar.css"
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const NavigationHome = () => {
  const navigate = useNavigate();
  return (
    <div className='NavBar'>
      <div className='Heading'>
        <h1>⏰ Time Capsule</h1>
      </div>
      <div className='Actions'>
        <div className='Loginbtn'>
        <Button text={"Login"} onClickListener={() =>{
          navigate("/Login")
        }}/>
        </div>
        <div className='Registerbtn'>
        <Button text={"Register"} onClickListener={() =>{
          navigate("/Register")
        }}/>
        </div>
      </div>
    </div>
  )
}

export default NavigationHome