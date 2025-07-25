import React, { useState, useEffect } from "react";
import Button from "../components/shared/Button";
import NavBar from "../components/shared/NavBar";
import CapsuleCard from "../components/landing/CapsuleCard";
import CreateCapsulePage from "./CreateCapsulePage";
import "../styles/Dashboard.css";
import "../styles/Modal.css";
import CapsuleModal from "../components/landing/CapsuleModal";
import axios from "axios";

const DashboardPage = () => {
  const [capsules, setcapsules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  useEffect(() => {
    loadCapsules();
  }, []);

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

  const loadCapsules = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://127.0.0.1:8000/api/v0.1/capsules/user",
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
  const capsuleList = capsules?.payload || [];
  return (
    <div className="Dashboard">
      <div
        className={`dashboard-blurred-wrapper ${showModal ? "blurred" : ""}`}>
        <NavBar onCreateClick={() => setShowModal(true)} />
        <div className="About">
          <div className="Head">
            <h1>Welcome Back!</h1>
          </div>
          <div className="description">
            <p>
              Ready to create another time capsule or check on your existing
              ones?
            </p>
          </div>
          <div className="Buttons Createbtn">
            <Button
              text={"+ Add Capsule"}
              onClickListener={() => setShowModal(true)}
            />
          </div>
          <div className="CapsuleCards">
            {capsuleList.map((capsule) => {
              return (
                <CapsuleCard
                  key={capsule.id}
                  capsule={capsule}
                  onClick={() => ViewCapsule(capsule.id)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CreateCapsulePage
              onClose={() => {
                setShowModal(false);
                loadCapsules();
              }}
            />
            <button onClick={() => setShowModal(false)} className="close-btn">
              ✖
            </button>
          </div>
        </div>
      )}

      <CapsuleModal
        capsule={selectedCapsule}
        onClose={() => setSelectedCapsule(null)}
      />
    </div>
  );
};

export default DashboardPage;
