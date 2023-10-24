import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import "../css/Row.css";

import CarouselReact from "./Carousel";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  useEffect(() => {
    async function fetcData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request?.data?.data);
        // console.log(request);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetcData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          <CarouselReact movies={movies} />
        </div>
      </div>
    </>
  );
}
export default Row;
