import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    setLoginError("");

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/login",
        formdata
      );
      if (res.data?.status == "success") {
        localStorage.setItem("token", res.data.payload.token);
        navigate("/Dashboard");
      }
      setLoginError("Invalid email or password.");
    } catch (error) {
      setLoginError("Server error. Please try again later.");
      console.error("Login error:", error);
    }
  };
  return (
    <div className="LoginForm">
      <h1>Welcome Back!</h1>
      <form onSubmit={Login}>
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

        <button type="submit" className="loginbtn">
          Login
        </button>
        {loginError && <p className="error-text">{loginError}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
