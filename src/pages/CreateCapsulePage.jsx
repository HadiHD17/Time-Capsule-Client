import React, { useState } from "react";
import "../styles/CreateCapsulePage.css";
import axios from "axios";
import { encodeFileToBase64 } from "../components/landing/encoder";

const CreateCapsulePage = ({ onClose }) => {
  const [Title, setTitle] = useState("");
  const [RevealDate, setRevealDate] = useState("");
  const [Message, setMessage] = useState("");
  const [Mood, setMood] = useState("");
  const [Tag, setTag] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [Privacy, setPrivacy] = useState("private");
  const [Mode, setMode] = useState(false);

  const cancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const getUserIP = async () => {
    try {
      const res = await axios.get("https://api.ipify.org?format=json");
      return res.data.ip;
    } catch (error) {
      console.error("Failed to get IP", error);
      return null;
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const ip = await getUserIP();
    const formdata = new FormData();

    formdata.append("title", Title);
    formdata.append("message", Message);
    formdata.append("reveal_date", RevealDate);
    formdata.append("privacy", Privacy);
    formdata.append("tag", Tag);
    formdata.append("mood", Mood);
    formdata.append("is_surprise", Mode ? 1 : 0);
    formdata.append("user_ip", ip);

    const attachments = [];
    if (image) {
      const base64image = await encodeFileToBase64(image);
      attachments.push(base64image);
    }
    if (audio) {
      const base64image = await encodeFileToBase64(audio);
      attachments.push(base64image);
    }

    attachments.forEach((base64) => {
      formdata.append("attachments[]", base64);
    });

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/add_capsule",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onClose();
    } catch (error) {
      if (error.response) {
        console.error("Backend error:", error.response.data);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };

  return (
    <div className="CreateForm">
      <form onSubmit={submit}>
        <div className="form-top">
          <input
            type="text"
            id="Title"
            className="Title"
            placeholder="enter your title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="date"
            id="RevealDate"
            className="RevealDate"
            onChange={(e) => setRevealDate(e.target.value)}
            required
          />
        </div>
        <div className="form-message">
          <input
            type="text"
            id="Message"
            className="Message"
            placeholder="enter your message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-mood">
          <label className="Mood">Select Your Mood:</label>
          <select
            id="Mood"
            className="Mood"
            name="Mood"
            onChange={(e) => setMood(e.target.value)}>
            <option value="">-- Choose a mood --</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="angry">😠 Angry</option>
            <option value="excited">🤩 Excited</option>
            <option value="relaxed">😌 Relaxed</option>
            <option value="bored">😐 Bored</option>
            <option value="anxious">😰 Anxious</option>
          </select>
        </div>
        <div className="form-tag">
          <input
            type="text"
            id="Tag"
            className="Tag"
            placeholder="Enter your tags"
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div className="form-attachement">
          <label className="Attachement">Attach Media</label>
          <input
            label={"Image"}
            type={"file"}
            name={"image"}
            accept="image/*"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />

          <input
            label={"Audio"}
            type={"file"}
            name={"audio"}
            accept="audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
          />
        </div>
        <div className="form-privacy">
          <label className="Privacy">Select Your Privacy</label>
          <label>
            <input
              type="radio"
              className="Privacy"
              value="public"
              checked={Privacy === "public"}
              onChange={(e) => {
                setPrivacy(e.target.value);
              }}
            />
            🌍 Public - Everyone can see it on the wall
          </label>
          <label>
            <input
              type="radio"
              className="Privacy"
              value="private"
              checked={Privacy === "private"}
              onChange={(e) => {
                setPrivacy(e.target.value);
              }}
            />
            🔒 Private - Only I can see it
          </label>
          <label>
            <input
              type="radio"
              className="Privacy"
              value="unlisted"
              checked={Privacy === "unlisted"}
              onChange={(e) => {
                setPrivacy(e.target.value);
              }}
            />
            🔗 Unlisted - Shareable via private link
          </label>
        </div>
        <div className="form-mode">
          <label>
            <input
              type="checkbox"
              className="Mode"
              checked={Mode}
              onChange={(e) => {
                setMode(e.target.checked);
              }}
            />
            🎁 Surprise Mode - Hide content until reveal date (even from me!)
          </label>
        </div>
        <div className="form-buttons">
          <button className="cancelbtn" onClick={cancel}>
            Cancel
          </button>
          <button className="submitbtn">Create Capsule</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCapsulePage;
