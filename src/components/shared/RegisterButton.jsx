import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
    const navigate = useNavigate();
  return (
    <button 
        onClick={()=>{
          navigate("/Register");
        }}
        >
        Sign Up
        </button>
  )
}

export default RegisterButton
