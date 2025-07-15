import React, {useState} from 'react'
import Button from '../components/shared/Button'
import NavBar from '../components/shared/NavBar'
import CapsuleCard from '../components/landing/CapsuleCard'
import CreateCapsulePage from './CreateCapsulePage'
import "../styles/Dashboard.css"
import "../styles/Modal.css"
import CapsuleModal from '../components/landing/CapsuleModal';


const DashboardPage = () => {
  const [selectedCapsuleId, setSelectedCapsuleId] = useState(null);
  const [capsules, setcapsules] = useState([{
    id: 1,
    title: "2024 GOAL",
    message: "I hope this message is good",
    privacy: "private",
    country: "Lebanon",
    countdown: "7d5h50m40s"
  },{
      id: 2,
      title: "2024 GOAL",
      message: "I hope this message is good",
      privacy: "public",
      country: "Lebanon",
      mood: "Sad",
      timerange: "This Month",
      countdown: "7d5h50m40s"
    }]);
  const [showModal, setShowModal] = useState(false);
  const selectedCapsule = capsules.find(c => c.id === selectedCapsuleId);
  return (
    <div className="Dashboard">
      <div className={`dashboard-blurred-wrapper ${showModal ? 'blurred' : ''}`}>
        <NavBar onCreateClick={() => setShowModal(true)}/>
        <div className='About'>
          <div className='Head'>
            <h1>📮Welcome Back!</h1>
          </div>
          <div className='description'>
            <p>Ready to create another time capsule or check on your existing ones?</p>
          </div>
          <div className='Buttons Createbtn'>
            <Button text={"+ Add Capsule"} onClickListener={() => setShowModal(true)}/>
          </div>
          <div className='CapsuleCards'>
            {capsules.map((capsule) =>{
              return <CapsuleCard key={capsule.id} capsule={capsule} onClick={() => setSelectedCapsuleId(capsule.id)}/>})}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CreateCapsulePage onClose={() => setShowModal(false)} /> 
            <button onClick={() => setShowModal(false)} className="close-btn">✖</button>
          </div>
        </div>
      )}

      <CapsuleModal capsule={selectedCapsule} onClose={() => setSelectedCapsuleId(null)} />

    </div>
  )
}

export default DashboardPage