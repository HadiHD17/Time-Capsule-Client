import React, {useState} from 'react'
import NavBar from '../components/shared/NavBar'
import { Link } from 'react-router-dom'
import CapsuleCard from '../components/landing/CapsuleCard'
import "../styles/PublicWall.css"
import CapsuleModal from '../components/landing/CapsuleModal';

const PublicWallPage = () => {
    const [selectedCapsuleId, setSelectedCapsuleId] = useState(null);
    const [country, setCountry] = useState('');
    const [mood, setMood] = useState('');
    const [timerange, setTimeRange] = useState('');
    const [capsules, setcapsules] = useState([{
        id: 1,
        title: "2024 GOAL",
        message: "I hope this message is good",
        privacy: "public",
        country: "Lebanon",
        mood: "Happy",
        timerange: "This Week",
        countdown: "7d5h50m40s"
      },
    {
        id: 2,
        title: "2024 GOAL",
        message: "I hope this message is good",
        privacy: "public",
        country: "Lebanon",
        mood: "Sad",
        timerange: "This Month",
        countdown: "7d5h50m40s"
      }]);
    const selectedCapsule = capsules.find(c => c.id === selectedCapsuleId);

  return (
    <div className='Public-Wall'>
        <NavBar/>
        <div className="wall-header">
        <div className='back'>
            <h4>
                <Link to ="/Dashboard">← Back To Capsules</Link>
            </h4>
        </div>
        <h1>Public Time Capsule Wall</h1>
        </div>
        <div className='Filters'>
            <select id="Country" className='Country-filter' name='Country' onChange={(e) => setCountry(e.target.value)}>
                <option value="">All Countries</option>
                <option value="Lebanon">🇱🇧 Lebanon</option>
                <option value="USA">🇺🇸 United States</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="France">🇫🇷 France</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="Japan">🇯🇵 Japan</option>
                <option value="India">🇮🇳 India</option>
            </select>

            <select id="Mood" className='Mood-filter' name='Mood' onChange={(e) => setMood(e.target.value)}>
                <option value="">All Moods</option>
                <option value="Happy">😊 Happy</option>
                <option value="Sad">😢 Sad</option>
                <option value="Angry">😠 Angry</option>
                <option value="Excited">🤩 Excited</option>
                <option value="Relaxed">😌 Relaxed</option>
                <option value="Bored">😐 Bored</option>
                <option value="Anxious">😰 Anxious</option>
            </select>

            <select id="TimeRange" className='TimeRange-filter' name='TimeRange' onChange={(e) => setTimeRange(e.target.value)}>
                <option value="">All Time Ranges</option>
                <option value="This Week">☀️ This Week</option>
                <option value="This Month">🌤️ This Month</option>
                <option value="This Year">🌇 This Year</option>
                <option value="Last Year">🌙 Last Year</option>
            </select>

        </div>
        <div className='PublicCapsules'>
            {capsules
                .filter((capsule) => {
                return (
                    capsule.privacy === "public" &&
                    (mood === "" || capsule.mood === mood) &&
                    (country === "" || capsule.country === country) &&
                    (timerange === "" || capsule.timerange === timerange)
                );
                })
                .map((capsule) => (
                <CapsuleCard key={capsule.id} capsule={capsule} onClick={() => setSelectedCapsuleId(capsule.id)} />
                ))}
        </div>

        <CapsuleModal capsule={selectedCapsule} onClose={() => setSelectedCapsuleId(null)} />

    </div>
  )
}

export default PublicWallPage