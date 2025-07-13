import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
    const navigate = useNavigate();
  return (
    <div className="Registerbtn">
    <button 
        onClick={()=>{
          navigate("/Register");
        }}
        >
        Sign Up
        </button>
        </div>
  )
}

export default RegisterButton
