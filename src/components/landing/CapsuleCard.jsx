import React, { useState, useEffect } from "react";
import "../../styles/Capsule.css";

const CapsuleCard = ({ capsule, onClick }) => {
  const { id, title, message, privacy, country, reveal_date } = capsule;
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [reveal_date]);

  const updateCountdown = () => {
    const target = new Date(reveal_date);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      setCountdown("Revealed!");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  return (
    <div className="capsule-card" onClick={onClick}>
      <div className="capsule-top">
        <h4 className="capsule-title">{title}</h4>
        <span className="capsule-privacy">{privacy}</span>
      </div>
      <p className="capsule-message">{message}</p>
      <div className="capsule-bottom">
        <span className="capsule-country">{country}</span>
        <span className="capsule-countdown">{countdown}</span>
      </div>
    </div>
  );
};

export default CapsuleCard;
