import React, {useState} from 'react'
import CreateButton from '../components/shared/CreateButton'
import NavBar from '../components/shared/NavBar'
import CapsuleCard from '../components/landing/CapsuleCard'
import "../styles/Dashboard.css"

const DashboardPage = () => {
  const [capsules, setcapsules] = useState([{
    id: 1,
    title: "2024 GOAL",
    message: "I hope this message is good",
    privacy: "private",
    country: "Lebanon",
    countdown: "7d5h50m40s"
  }]);
  return (
    <div className="Dashboard">
      <NavBar/>
      <div className='About'>
            <div className='Head'>
                <h1>📮Welcome Back!</h1>
            </div>
            <div className='description'>
                <p>Ready to create another time capsule or check on your existing ones?</p>
            </div>
            <div className='Buttons'>
                <CreateButton/>
            </div>
            <div className='CapsuleCards'>
              {capsules.map((capsule) =>{
              return <CapsuleCard key={capsule.id} capsule={capsule}/>})}
            </div>
            </div>
    </div>
    
  )
}

export default DashboardPage