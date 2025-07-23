import React from "react";
import "../styles/Home.css";
import NavigationHome from "../components/shared/NavigationHome";
import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <NavigationHome />
      <div className="About">
        <div className="Head">
          <h1>Send Messages To Your Future Self</h1>
        </div>
        <div className="description">
          <p>
            Create time capsules with messages, photos, and memories to be
            revealed at the perfect moment
          </p>
        </div>
        <div className="Buttons">
          <div className="Registerbtn">
            <Button
              text={"Register"}
              onClickListener={() => {
                navigate("/Register");
              }}
            />
          </div>
          <div className="Loginbtn">
            <Button
              text={"Login"}
              onClickListener={() => {
                navigate("/Login");
              }}
            />
          </div>
        </div>
        <div className="FeatureCards">
          <div className="MainFeature">
            <p>
              ⏰ Time-Locked Messages Set future dates for your messages to be
              revealed
            </p>
          </div>
          <div className="SecondaryFeature">
            <p>
              🌍 Share with the World Make your capsules public or keep them
              private
            </p>
          </div>
          <div className="TertiaryFeature">
            <p>
              📱 Rich Media Add photos, audio, and documents to your capsules
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
