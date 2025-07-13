import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateButton = () => {
    const navigate = useNavigate();
  return (
    <div className="Createbtn">
        <button onClick={()=>{
            navigate("/Create");
        }}>
        + Add Capsule</button>
    </div>
  )
}

export default CreateButton