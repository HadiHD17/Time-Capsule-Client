import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogButton = () => {
    const navigate = useNavigate();
  return (
    <div className='Loginbtn'>
        <button onClick={()=>{
        navigate("/Login");
        }}>
            Login
        </button>
        </div>
  )
}

export default LogButton
