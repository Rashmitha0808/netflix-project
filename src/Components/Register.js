import React, { useState } from "react";
import "../css/Register.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

function Register({ togglePage }) {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "ott",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields must be filled");
    } else if (!formData.email.includes("@")) {
      setError("Enter valid email");
    } else {
      setError("");
      dispatch(signUpUser(formData));
    }
  };

  if (authenticated) {
    navigate("/");
  }

  return (
    <div className="signUpScreen">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          value={formData.name}
          name="name"
          onChange={handleChange}
          placeholder="Username"
          type="username"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="password"
          type="password"
        />
        <button type="submit">Sign Up</button>
        <h4>
          <span className="SignUpScreen_grey">Are you existng user </span>
          <span className="SignUpScreen_link" onClick={togglePage}>
            Login here.
          </span>
        </h4>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
