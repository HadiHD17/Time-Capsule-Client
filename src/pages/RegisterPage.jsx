import React, { useState } from "react";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [RegisterError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    setRegisterError("");

    const formdata = new FormData();
    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("password_confirmation", confirmpassword);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/register",
        formdata
      );
      if (res.data?.status == "success") {
        localStorage.setItem("token", res.data.payload.token);
        navigate("/Dashboard");
      }
      setRegisterError("Invalid email or password.");
    } catch (error) {
      setRegisterError("Server error. Please try again later.");
      console.error("Sign Up error:", error);
    }
  };
  return (
    <div className="RegisterForm">
      <h1>CREATE ACCOUNT</h1>
      <form onSubmit={Register}>
        <input
          type="text"
          id="fullname"
          className="fullname"
          placeholder="enter your full name"
          onChange={(e) => setfullname(e.target.value)}
          required
        />

        <input
          type="email"
          id="email"
          className="email"
          placeholder="enter your email"
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          className="password"
          placeholder="enter your password"
          onChange={(e) => setpassword(e.target.value)}
          required
        />

        <input
          type="password"
          id="confirmpassword"
          className="confirmpassword"
          placeholder="confirm your password"
          onChange={(e) => setconfirmpassword(e.target.value)}
          required
        />

        <button type="submit" className="registerbtn">
          Sign Up
        </button>
        {RegisterError && <p className="error-text">{RegisterError}</p>}
        <p>
          Already Have An Account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
