import React, { useState, useEffect } from "react";
import NavBar from "../components/shared/NavBar";
import { Link } from "react-router-dom";
import CapsuleCard from "../components/landing/CapsuleCard";
import "../styles/PublicWall.css";
import CapsuleModal from "../components/landing/CapsuleModal";
import axios from "axios";

const PublicWallPage = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [country, setCountry] = useState("");
  const [mood, setMood] = useState("");
  const [showModal, setShowModal] = useState(false);
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

  const ViewCapsule = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://127.0.0.1:8000/api/v0.1/capsule/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSelectedCapsule(res.data.payload);
    } catch (error) {
      console.error("Failed to load capsule details", error);
    }
  };

  useEffect(() => {
    loadPublicCapsules();
  }, []);

  const capsuleList = capsules?.payload || [];

  return (
    <div className="Public-Wall">
      <NavBar onCreateClick={() => setShowModal(true)} />
      <div className="wall-header">
        <div className="back">
          <h4>
            <Link to="/Dashboard"> Back To Capsules</Link>
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
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="angry">😠 Angry</option>
          <option value="excited">🤩 Excited</option>
          <option value="relaxed">😌 Relaxed</option>
          <option value="bored">😐 Bored</option>
          <option value="anxious">😰 Anxious</option>
          <option value="hopeful">🌈 Hopeful</option>
          <option value="grateful">🙏 Grateful</option>
          <option value="nostalgic">🕰 Nostalgic</option>
          <option value="in love">❤ In Love</option>
          <option value="curios">🤔 Curious</option>
          <option value="motivated">💪 Motivated</option>
          <option value="calm">🧘 Calm</option>
          <option value="dreamy">🌙 Dreamy</option>
          <option value="funny">😂 Funny</option>
          <option value="reflective">📖 Reflective</option>
          <option value="adventurous">🧭 Adventurous</option>
          <option value="inspired">✨ Inspired</option>
          <option value="surprised">😲 Surprised</option>
          <option value="lonely">😔 Lonely</option>
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
              onClick={() => ViewCapsule(capsule.id)}
            />
          ))}
      </div>

      <CapsuleModal
        capsule={selectedCapsule}
        onClose={() => setSelectedCapsule(null)}
      />
    </div>
  );
};

export default PublicWallPage;
