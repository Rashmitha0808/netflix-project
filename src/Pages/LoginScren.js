import React, { useEffect, useState } from "react";
import "../css/LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../store/UserSlice";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        {/* <Link to="/register">
          <button className="loginScren_button">Sign In</button>
        </Link> */}
        <div className="loginScreen_gradient"></div>

        <div className="loginScreen_body">
          {isLoginPage ? (
            isSignInPage ? (
              <Login togglePage={toggleSignInPage} />
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
                  Enter your email as 'test@gamil.com' password as'12345'
                </strong>{" "}
                for better experience.
              </h3>
              <div className="loginScreen_input">
                <form onSubmit={togglePage}>
                  <input type="email" placeholder="Email address" id="email" />
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
