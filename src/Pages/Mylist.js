import React from "react";
import { useState } from "react";
import "../css/Mylist.css";
import useAPI from "../Hooks/useAPI";
import { useEffect } from "react";
import Card from "../Components/Cards/Card";
const Mylist = () => {
  const [watchListItems, setWatchListItems] = useState([]);

  // const removeFromWatchlist = (item) => {
  //   const updatedList = watchListItems.filter((i) => i.index !== item.index);
  //   setWatchListItems(updatedList);
  // };
  const { data, get } = useAPI();

  useEffect(() => {
    get("/ott/watchlist/like");
  }, []);

  console.log(data, "im first");
  const handleRemoveLists = () => {};
  return (
    <div className="watchlist_container">
      <div className="watchlist_header">
        <h2>My Watchlist</h2>
      </div>
      <div className="main_view">
        {data?.shows?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Mylist;
