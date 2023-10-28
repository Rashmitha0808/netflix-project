import React, { useEffect } from "react";
import useAPI from "../Hooks/useAPI";
import Card from "../Components/Cards/Card";
import "../css/Show.css";

const Tvshows = () => {
  const { data, get } = useAPI();
  useEffect(() => {
    get('/ott/show?filter={"type" : "tv show"}&page=2&limit=30');
  }, []);
  return (
    <div className="show_container">
      <div className="show_header">
        <h2>TV shows</h2>
      </div>
      <div className="view_show">
        {data?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Tvshows;
