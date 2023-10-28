import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Cards/Card.css";
import { FaPlayCircle } from "react-icons/fa";
import { HiPlus, HiChevronDown } from "react-icons/hi2";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import useAPI from "../../Hooks/useAPI";
import { useEffect } from "react";
import { Fragment } from "react";
import Modal from "../Modal/Modal";
import Portal from "../Modal/Portal";

function Card({
  thumbnail,
  title,
  description,
  keywords,
  _id,
  cast,
  director,
  createdAt,
}) {
  const navigate = useNavigate();
  // const [expand, setExpand] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, patch } = useAPI();
  const { data: watchlist } = useAPI();

  // const handleExpand = () => {
  //   setExpand(!expand);
  // };
  const handleIsAdded = () => {
    patch("/ott/watchlist/like", { showId: _id });
  };
  const openModal = (e) => {
    if (e.stopProgation) e.stopProgation();

    document.documentElement.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("debug");
    document.documentElement.style.overflow = "";
    setIsModalOpen(false);
  };
  const handlePlayVideo = () => {
    navigate(`/video/${_id}`);
  };

  useEffect(() => {
    setIsAdded(data?.message?.includes("add"));
  }, [data]);

  useEffect(() => {
    setIsAdded(watchlist?.shows?.some(({ _id: id }) => id === _id));
  }, [watchlist]);

  // useEffect(() => {
  //   get("/ott/watchlist/like");
  //   console.log("useEffect 3");
  // }, []);
  // if (true) {
  //   return <h1>Card</h1>;
  // }
  return (
    <>
      <div className="card_wrapper">
        <div className="card">
          <img className="card_img" src={thumbnail} alt="card" />
        </div>

        <div className="cardDetails">
          <div onClick={openModal}>
            <img className="img" src={thumbnail} />
          </div>

          <div className="details">
            {/* <h2 className="card_title">{title}</h2> */}
            <div>
              <FaPlayCircle onClick={handlePlayVideo} className="card_icon" />

              <span className="exclude-plus-sign" onClick={handleIsAdded}>
                {isAdded ? (
                  <MdOutlineFileDownloadDone className="card_icon" />
                ) : (
                  <HiPlus className="card_icon" />
                )}
              </span>
            </div>

            <div className="genre">
              {keywords?.map((name, i) => (
                <Fragment key={i}>
                  <p>{name}</p>

                  <div className="dot"></div>
                </Fragment>
              ))}
            </div>
            <span
              onClick={openModal}
              className="dropdownIcon"
              id="dropdownBtn"
              // onClick={handleExpand}
            >
              <HiChevronDown
                className="card_icon"
                // className={`card_icon ${expand ? "expand" : ""}`}
              />
            </span>
            {/* {expand && <p className="description">{description}</p>} */}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Portal onClose={closeModal}>
          <Modal
            thumbnail={thumbnail}
            title={title}
            description={description}
            keywords={keywords}
            onClose={closeModal}
            cast={cast}
            director={director}
            createdAt={createdAt}
            id={_id}
          />
        </Portal>
      )}
    </>
  );
}

export default Card;
