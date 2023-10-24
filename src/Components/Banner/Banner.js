import React, { useEffect, useState } from "react";
import "../Banner/Banner.css";
import axios from "../../API/axios";
import useAPI from "../../Hooks/useAPI";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  // const randomPage = Math.floor(Math.random() * 1000);

  const { data, get } = useAPI();

  const navigate = useNavigate();
  const movie = data?.[0];

  const handlePlayVideo = (e) => {
    navigate(`/video/${data?.[0]._id}`);
    // console.log(data?.[0]._id, "data");
  };

  useEffect(() => {
    get("/ott/show?page=12&limit=1");
  }, []);
  function trunCate(string, num) {
    return string?.length > num ? string.substr(0, num - 1) + "...." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("/banner.jpg")`,
        backgroundPosition: " 0 -20px",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title}</h1>

        <h1 className="banner_description">
          {trunCate(movie?.description, 150)}{" "}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button active" onClick={handlePlayVideo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="banner_button_svg"
              data-name="Play"
              aria-hidden="true"
            >
              <path
                d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                fill="currentColor"
              ></path>
            </svg>
            Play
          </button>
          <Link to="/star">
            <button className="banner_button more_info">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="banner_button_svg"
                data-name="CircleI"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              More info
            </button>
          </Link>
        </div>

        {/* <div className="banner_fadeBottom"></div> */}
      </div>
    </header>
  );
}
export default Banner;
