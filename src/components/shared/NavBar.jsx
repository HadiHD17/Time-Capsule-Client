import React from 'react'
import '../../styles/Navbar.css'
import Button from './Button'
import { useNavigate} from 'react-router-dom'

const NavBar = ({onCreateClick}) => {
  const navigate = useNavigate();
  
  return (
    <div className='NavBar'>
      <div className='Heading'>
        <h1>⏰ Time Capsule</h1>
      </div>
      <div className='Actions'>
        <div className='Createbtn'>
        <Button text={"+ Add Capsule"} onClickListener={() =>{
          onCreateClick();
        }}/>
        </div>
        <div className='Publicbtn'>
        <Button className={"Publicbtn"} text={"Public Wall"} onClickListener={() =>{
          navigate("/Public")
        }}/>
        </div>
        <div className='Logoutbtn'>
        <Button className={"Logoutbtn"} text={"Logout"} onClickListener={() =>{
          navigate("/Home")
        }}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar