import React, { useEffect, useState } from "react";
import "../css/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../store/UserSlice";
import Login from "../Components/LoginPage/Login";
import Register from "../Components/LoginPage/Register";

function LoginScren() {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { authenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn());
    console.log("useEffect");
  }, []);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };
  const toggleSignInPage = () => {
    setIsSignInPage(!isSignInPage);
  };
  if (authenticated) {
    navigate("/");
  }
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // console.log(userInfo,"userInfo");

  function handleChange(event) {
    const element = event.target;
    const { name, value } = element;

    setUserInfo((oldInfo) => {
      return {
        ...oldInfo,
        [name]: value,
      };
    });
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          src="/Assets/logo.png"
          className="loginScreen_logo"
          alt="netflix-logo"
        />

        {/* <Link to="/register">
          <button className="loginScren_button">Sign In</button>
        </Link> */}
        <div className="loginScreen_gradient"></div>

        <div className="loginScreen_body">
          {isLoginPage ? (
            isSignInPage ? (
              <Login
                togglePage={toggleSignInPage}
                userEmail={userInfo.email}
                onChange={handleChange}
              />
            ) : (
              <Register togglePage={toggleSignInPage} />
            )
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere, Cancel at anytime.</h2>
              <h3>
                Ready to watch?{" "}
                <strong>
                  Enter your email as 'test@gmail.com' password as
                  &apos;12345&apos;
                </strong>{" "}
                for better experience.
              </h3>
              <div className="loginScreen_input">
                <form onSubmit={togglePage}>
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={userInfo.email}
                    id="email"
                    onChange={handleChange}
                  />
                  <button className="loginScreen_getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScren;
