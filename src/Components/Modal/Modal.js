import React from "react";
import Card from "../Cards/Card";
import useAPI from "../../Hooks/useAPI";
import { useEffect } from "react";

function Modal({
  thumbnail,
  title,
  description,
  cast,
  keywords,
  director,
  createdAt,
  _id,
  isOpen,
  onClose,
  children,
}) {
  const { data, get } = useAPI([]);
  useEffect(() => {
    get("/ott/show");
  }, []);
  const createdAtString = createdAt;
  const createdAtDate = new Date(createdAtString);

  // const date = createdAtDate.toDateString();
  const time = createdAtDate.toTimeString().split(" ")[0];

  return (
    <div className="modalStyle">
      <div className="detailed_page">
        <div className="detailed_card">
          <img className="detailed_img" src={thumbnail} />
          <div className="shadow"></div>
          <div className="detailed_btns">
            <button className="detailed_play">
              <svg
                className="detailed_play__svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <button className="detailed_add">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="detailed_add_svg"
                data-name="Plus"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div onClick={onClose} className="close_tab">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="close_btn"
              data-name="X"
              aria-labelledby="preview-modal-81012551"
              data-uia="previewModal-closebtn"
              role="button"
              aria-label="close"
              tabIndex="0"
            >
              <title id="preview-modal-81012551">close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="detailed_body">
            <div className="detail_description">
              <h2>{title}</h2>
              Description: {description}
            </div>
            <div className="modal_details">
              <span className="detailed_cast">
                <span className="detailed_header_lists">cast: </span>{" "}
                {cast?.join(", ")}
              </span>

              <span className="detailed_cast">
                <span className="detailed_header_lists">Genre: </span>
                {keywords?.join(", ")}
              </span>

              <span className="detailed_director">
                <span className="detailed_header_lists">director: </span>
                {director}
              </span>
            </div>
          </div>
          <div className="more_like_header">
            <h1>More Like this</h1>
          </div>
        </div>
        <div className="more_details">
          {data?.slice(0, 12).map((movie) => (
            <Card {...movie} key={movie?._id} />
          ))}
        </div>
        <div className="modal_about_header">
          <h3 className="detailed_director">
            About Director:
            <strong> {title} </strong>
          </h3>

          <div className="about_container">
            <div className="div_about">
              <span>Director:</span> {director}
            </div>
            <div className="div_about">
              <span>Cast: </span> {cast?.join(", ")}
            </div>
            <div className="div_about">
              <span>Genre: </span> {keywords?.join(", ")}
            </div>

            <div className="div_about">
              <span>Timings:</span> {createdAtDate.toTimeString().split(" ")[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
