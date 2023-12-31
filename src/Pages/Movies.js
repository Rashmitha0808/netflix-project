import React, { useEffect } from "react";
import useAPI from "../Hooks/useAPI";
import Card from "../Components/Cards/Card";
import "../css/Show.css";
function Movies() {
  const styleMovie = {
    paddingTop: "70px",
    color: "white",
  };
  const { data, get } = useAPI();
  const movie = data;
  useEffect(() => {
    get('/ott/show?filter={"type" : "movie"}&page=1&limit=30');
    console.log(data);
  }, []);
  return (
    <div className="show_container">
      <div className="show_header">
        <h2>Movies</h2>
      </div>
      <div className="view_show">
        {movie?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
