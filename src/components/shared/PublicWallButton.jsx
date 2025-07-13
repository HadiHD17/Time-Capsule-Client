import React from 'react'
import { useNavigate } from 'react-router-dom';

const PublicWallButton = () => {
    const navigate = useNavigate();
  return (
    <div className="Publicbtn">
        <button onClick={()=>{
            navigate("/Public");
        }}>
        Public Wall</button>
    </div>
  )
}

export default PublicWallButton