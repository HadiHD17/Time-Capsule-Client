import React from 'react'
import "../../styles/Capsule.css"

const CapsuleCard = ({capsule, onClick}) => {
    const {id,title, message, privacy, country, countdown} = capsule;
  return (
    <div className="capsule-card" onClick={onClick}>
        <div className="capsule-top">
        <h4 className='capsule-title'>{title}</h4>
        <span className='capsule-privacy'>{privacy}</span>
        </div>
        <p className='capsule-message'>{message}</p>
        <div className='capsule-bottom'>
        <span className='capsule-country'>{country}</span>
        <span className='capsule-countdown'>{countdown}</span>
        </div>
    </div>
  )
}

export default CapsuleCard