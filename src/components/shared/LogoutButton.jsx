import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <div className="Logoutbtn">
        <button onClick={()=>{
            navigate("/Logout");
        }}>
        Logout</button>
    </div>
  )
}

export default LogoutButton