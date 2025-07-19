import React, { useState, useEffect } from "react";
import NavBar from "../components/shared/NavBar";
import { Link } from "react-router-dom";
import CapsuleCard from "../components/landing/CapsuleCard";
import "../styles/PublicWall.css";
import CapsuleModal from "../components/landing/CapsuleModal";
import axios from "axios";

const PublicWallPage = () => {
  const [selectedCapsuleId, setSelectedCapsuleId] = useState(null);
  const [country, setCountry] = useState("");
  const [mood, setMood] = useState("");
  const [capsules, setcapsules] = useState([]);

  const loadPublicCapsules = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://127.0.0.1:8000/api/v0.1/capsules/public",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setcapsules(res.data);
    } catch (error) {
      console.error("Failed to load capsules", error);
    }
  };

  useEffect(() => {
    loadPublicCapsules();
  }, []);

  console.log("Capsules:", capsules);

  const capsuleList = capsules?.payload || [];
  const selectedCapsule = capsuleList.find((c) => c.id === selectedCapsuleId);

  return (
    <div className="Public-Wall">
      <NavBar />
      <div className="wall-header">
        <div className="back">
          <h4>
            <Link to="/Dashboard">← Back To Capsules</Link>
          </h4>
        </div>
        <h1>Public Time Capsule Wall</h1>
      </div>
      <div className="Filters">
        <select
          id="Country"
          className="Country-filter"
          name="Country"
          onChange={(e) => setCountry(e.target.value)}>
          <option value="">All Countries</option>
          <option value="Lebanon">🇱🇧 Lebanon</option>
          <option value="USA">🇺🇸 United States</option>
          <option value="UK">🇬🇧 United Kingdom</option>
          <option value="France">🇫🇷 France</option>
          <option value="Germany">🇩🇪 Germany</option>
          <option value="Japan">🇯🇵 Japan</option>
          <option value="India">🇮🇳 India</option>
        </select>

        <select
          id="Mood"
          className="Mood-filter"
          name="Mood"
          onChange={(e) => setMood(e.target.value)}>
          <option value="">All Moods</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Angry">😠 Angry</option>
          <option value="Excited">🤩 Excited</option>
          <option value="Relaxed">😌 Relaxed</option>
          <option value="Bored">😐 Bored</option>
          <option value="Anxious">😰 Anxious</option>
        </select>
      </div>
      <div className="PublicCapsules">
        {capsuleList
          .filter((capsule) => {
            return (
              (mood === "" || capsule.mood === mood) &&
              (country === "" || capsule.country === country)
            );
          })
          .map((capsule) => (
            <CapsuleCard
              key={capsule.id}
              capsule={capsule}
              onClick={() => setSelectedCapsuleId(capsule.id)}
            />
          ))}
      </div>

      <CapsuleModal
        capsule={selectedCapsule}
        onClose={() => setSelectedCapsuleId(null)}
      />
    </div>
  );
};

export default PublicWallPage;
