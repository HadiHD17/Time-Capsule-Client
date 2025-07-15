// src/components/modals/CapsuleModal.jsx
import React from 'react';
import JSZip from 'jszip';
import '../../styles/CapsuleModal.css'; // Use your styled modal CSS

const CapsuleModal = ({ capsule, onClose }) => {
  if (!capsule) return null;

  const handleExportZip = async () => {
    const zip = new JSZip();
    const capsuleContent = `
Title: ${capsule.title}
Message: ${capsule.message}
Privacy: ${capsule.privacy}
Country: ${capsule.country}
Countdown: ${capsule.countdown}
Tags: goals, fitness, music
Revealed: No
    `;
    zip.file("capsule.txt", capsuleContent.trim());

    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `${capsule.title.replace(/\s+/g, "_")}_capsule.zip`;
    link.click();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">✖</button>

        <h2>{capsule.title}</h2>
        <img src="/icons/target.png" alt="Target" className="emoji-icon" />
        <p className="message">{capsule.message}</p>

        <div className="modal-info-grid">
          <div><strong>Location:</strong> {capsule.country}</div>
          <div><strong>Privacy:</strong> {capsule.privacy}</div>
          <div><strong>Tags:</strong> goals, fitness, music</div>
          <div><strong>Revealed:</strong> No</div>
        </div>

        <div className="modal-buttons">
          <button onClick={handleExportZip}>📦 Export as ZIP</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CapsuleModal;
