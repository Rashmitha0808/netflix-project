import React, { useEffect, useRef, useState } from "react";
import { PiArrowLeftBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsVolumeUp, BsVolumeMute } from "react-icons/bs";
import { IoIosPause } from "react-icons/io";
import "../VideoPlayer/Video.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAPI from "../../Hooks/useAPI";

const Video = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [remainingTime, setRemainingTime] = useState("00:00");
  const navigate = useNavigate();

  const { id } = useParams();

  const UpdateRemainingTime = (videoElement) => {
    const duration = videoElement.duration;
    const currentTime = videoElement.currentTime;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);

    setRemainingTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  };
  const videoRef = useRef();

  console.log({ video: videoRef.current });

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", () => {
        UpdateRemainingTime(videoElement);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", () => {
          UpdateRemainingTime(videoElement);
        });
      }
    };
  }, []);

  const handleGoBack = () => {
    navigate("../");
    console.log("go back");
  };
  const handlePlay = (e) => {
    e.stopPropagation();
    const videoElement = videoRef.current;
    if (videoElement) {
      if (play) videoRef.current.pause();
      else videoRef.current.play();
      setPlay(!play);
    }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setMute(videoElement.muted);
    }
  };
  const handleForward = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime += 10;
    }
  };
  const handlePrev = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement) {
        videoElement.currentTime -= 10;
      }
    }
  };
  const { data, get } = useAPI();
  useEffect(() => {
    get(`/ott/show/${id}`);
  }, []);
  const { video_url } = data;
  return (
    <div className="video_player_head" onClick={handlePlay}>
      <PiArrowLeftBold
        className="back_btn_vdo  vdo_icons"
        onClick={handleGoBack}
      />

      <video
        ref={videoRef}
        className="video_player"
        src={video_url}
        autoPlay
        controls
        loop
      >
        {/* <source  type="video/mp4" /> */}
      </video>
      <div className="bottom_sec_vdo">
        <div className="progress_container">
          <progress className="progressBar" value="0" max="100"></progress>
        </div>
        <div className="video_controlers">
          <div className="video_controler">
            <div>
              {play ? (
                <FaPlay className="vdo_btn_play  vdo_icons" />
              ) : (
                <IoIosPause className="vdo_btn_play  vdo_icons" />
              )}
            </div>

            <svg
              onClick={handlePrev}
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="vdo_back"
              data-name="Back10"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0198 2.04817C13.3222 1.8214 15.6321 2.39998 17.5557 3.68532C19.4794 4.97066 20.8978 6.88324 21.5694 9.09717C22.241 11.3111 22.1242 13.6894 21.2388 15.8269C20.3534 17.9643 18.7543 19.7286 16.714 20.8192C14.6736 21.9098 12.3182 22.2592 10.0491 21.8079C7.77999 21.3565 5.73759 20.1323 4.26989 18.3439C2.80219 16.5555 2 14.3136 2 12L0 12C-2.74181e-06 14.7763 0.962627 17.4666 2.72387 19.6127C4.48511 21.7588 6.93599 23.2278 9.65891 23.7694C12.3818 24.3111 15.2083 23.8918 17.6568 22.5831C20.1052 21.2744 22.0241 19.1572 23.0866 16.5922C24.149 14.0273 24.2892 11.1733 23.4833 8.51661C22.6774 5.85989 20.9752 3.56479 18.6668 2.02238C16.3585 0.479973 13.5867 -0.214321 10.8238 0.0578004C8.71195 0.265799 6.70517 1.02858 5 2.2532V1H3V5C3 5.55228 3.44772 6 4 6H8V4H5.99999C7.45608 2.90793 9.19066 2.22833 11.0198 2.04817ZM2 4V7H5V9H1C0.447715 9 0 8.55228 0 8V4H2ZM14.125 16C13.5466 16 13.0389 15.8586 12.6018 15.5758C12.1713 15.2865 11.8385 14.8815 11.6031 14.3609C11.3677 13.8338 11.25 13.2135 11.25 12.5C11.25 11.7929 11.3677 11.1758 11.6031 10.6488C11.8385 10.1217 12.1713 9.71671 12.6018 9.43388C13.0389 9.14463 13.5466 9 14.125 9C14.7034 9 15.2077 9.14463 15.6382 9.43388C16.0753 9.71671 16.4116 10.1217 16.6469 10.6488C16.8823 11.1758 17 11.7929 17 12.5C17 13.2135 16.8823 13.8338 16.6469 14.3609C16.4116 14.8815 16.0753 15.2865 15.6382 15.5758C15.2077 15.8586 14.7034 16 14.125 16ZM14.125 14.6501C14.5151 14.6501 14.8211 14.4637 15.043 14.0909C15.2649 13.7117 15.3759 13.1814 15.3759 12.5C15.3759 11.8186 15.2649 11.2916 15.043 10.9187C14.8211 10.5395 14.5151 10.3499 14.125 10.3499C13.7349 10.3499 13.4289 10.5395 13.207 10.9187C12.9851 11.2916 12.8741 11.8186 12.8741 12.5C12.8741 13.1814 12.9851 13.7117 13.207 14.0909C13.4289 14.4637 13.7349 14.6501 14.125 14.6501ZM8.60395 15.8554V10.7163L7 11.1405V9.81956L10.1978 9.01928V15.8554H8.60395Z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              onClick={handleForward}
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="vdo_forward vdo_icons"
              data-name="Forward10"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.4443 3.68532C8.36795 2.39998 10.6778 1.8214 12.9802 2.04817C14.8093 2.22833 16.5439 2.90793 18 4H16V6H20C20.5523 6 21 5.55229 21 5V1H19V2.2532C17.2948 1.02859 15.2881 0.2658 13.1762 0.057802C10.4133 -0.214319 7.64154 0.479975 5.33316 2.02238C3.02478 3.56479 1.32262 5.85989 0.516718 8.51661C-0.289188 11.1733 -0.148981 14.0273 0.913451 16.5922C1.97588 19.1572 3.8948 21.2744 6.34325 22.5831C8.79169 23.8918 11.6182 24.3111 14.3411 23.7694C17.064 23.2278 19.5149 21.7588 21.2761 19.6127C23.0374 17.4666 24 14.7763 24 12L22 12C22 14.3136 21.1978 16.5555 19.7301 18.3439C18.2624 20.1323 16.22 21.3565 13.9509 21.8079C11.6818 22.2592 9.32641 21.9098 7.28604 20.8192C5.24567 19.7286 3.64657 17.9643 2.76121 15.8269C1.87585 13.6894 1.75901 11.3111 2.4306 9.09718C3.10219 6.88324 4.52065 4.97067 6.4443 3.68532ZM22 4V7H19V9H23C23.5523 9 24 8.55229 24 8V4H22ZM12.6018 15.5758C13.0389 15.8586 13.5466 16 14.125 16C14.7034 16 15.2078 15.8586 15.6382 15.5758C16.0753 15.2865 16.4116 14.8815 16.6469 14.3609C16.8823 13.8338 17 13.2135 17 12.5C17 11.7929 16.8823 11.1759 16.6469 10.6488C16.4116 10.1217 16.0753 9.71671 15.6382 9.43389C15.2078 9.14463 14.7034 9 14.125 9C13.5466 9 13.0389 9.14463 12.6018 9.43389C12.1713 9.71671 11.8385 10.1217 11.6031 10.6488C11.3677 11.1759 11.25 11.7929 11.25 12.5C11.25 13.2135 11.3677 13.8338 11.6031 14.3609C11.8385 14.8815 12.1713 15.2865 12.6018 15.5758ZM15.043 14.0909C14.8211 14.4637 14.5151 14.6501 14.125 14.6501C13.7349 14.6501 13.429 14.4637 13.207 14.0909C12.9851 13.7117 12.8741 13.1814 12.8741 12.5C12.8741 11.8186 12.9851 11.2916 13.207 10.9187C13.429 10.5395 13.7349 10.3499 14.125 10.3499C14.5151 10.3499 14.8211 10.5395 15.043 10.9187C15.2649 11.2916 15.3759 11.8186 15.3759 12.5C15.3759 13.1814 15.2649 13.7117 15.043 14.0909ZM8.60395 10.7163V15.8554H10.1978V9.01929L7 9.81956V11.1405L8.60395 10.7163Z"
                fill="currentColor"
              ></path>
            </svg>

            <div onClick={handleMute}>
              {mute ? (
                <BsVolumeMute className="video_volume vdo_icons" />
              ) : (
                <BsVolumeUp className="video_volume vdo_icons" />
              )}
            </div>
          </div>
          <div className="video_time">{remainingTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
