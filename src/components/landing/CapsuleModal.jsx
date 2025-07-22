import React from "react";
import JSZip from "jszip";
import "../../styles/CapsuleModal.css";
import axios from "axios";
import { renderAttachment } from "./renderattachment";

const CapsuleModal = ({ capsule, onClose }) => {
  if (!capsule) return null;

  const handleExportZip = async () => {
    const zip = new JSZip();

    // Text content for capsule metadata
    const capsuleContent = `
Title: ${capsule.title}
Message: ${capsule.message}
Privacy: ${capsule.privacy}
Country: ${capsule.country}
Tags: ${capsule.tag}
Revealed: ${capsule.is_revealed}
    `;
    zip.file("capsule.txt", capsuleContent.trim());

    // Attachments
    if (capsule.attachments && capsule.attachments.length > 0) {
      const attachmentsFolder = zip.folder("attachments");

      for (const attachment of capsule.attachments) {
        try {
          const res = await axios.get(
            `http://localhost:8000/storage/${attachment.file_url}`,
            { responseType: "blob" }
          );

          const ext = attachment.file_url.split(".").pop();
          const fileName = `attachment_${attachment.id}.${ext}`;
          attachmentsFolder.file(fileName, res.data);
        } catch (error) {
          console.error(`Error fetching attachment ${attachment.id}:`, error);
        }
      }
    }

    // Download ZIP
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `${capsule.title.replace(/\s+/g, "_")}_capsule.zip`;
    link.click();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          ✖
        </button>

        <h2>{capsule.title}</h2>
        <p className="message">{capsule.message}</p>

        <div className="modal-info-grid">
          <div>
            <strong>Location:</strong> {capsule.country}
          </div>
          <div>
            <strong>Privacy:</strong> {capsule.privacy}
          </div>
          <div>
            <strong>Tags:</strong> {capsule.tag}
          </div>
          <div>
            <strong>Revealed:</strong> {capsule.is_activated ? "Yes" : "No"}
          </div>
        </div>

        <div className="modal-attachment">
          {capsule.attachments && capsule.attachments.length > 0 ? (
            capsule.attachments.map((att) => (
              <div key={att.id} style={{ marginBottom: "1rem" }}>
                {renderAttachment(att)}
              </div>
            ))
          ) : (
            <p>No attachments</p>
          )}
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
