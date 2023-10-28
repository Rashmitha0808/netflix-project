import "../css/Login.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

function Login({ togglePage }) {
  const { authenticated, error: authError } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
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
    if (!formData.email || !formData.password) {
      setError("All fields must be filled");
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes("gmail.com")
    ) {
      setError("Enter valid email");
    } else {
      setError("");
      dispatch(logInUser(formData));
    }
  };

  if (authenticated) {
    navigate("/");
  }

  return (
    <div>
      <div className="signUpScreen">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

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
          <button type="submit">Sign In</button>
          <h4>
            <span className="SignUpScreen_grey">New to Netflix? </span>
            <span className="SignUpScreen_link" onClick={togglePage}>
              Sign up now.
            </span>
          </h4>
          {error ? (
            <p className="error">{error}</p>
          ) : (
            authError && <p className="error">{authError}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
