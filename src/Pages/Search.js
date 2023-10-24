import React from "react";
import useAPI from "../Hooks/useAPI";
import axios from "../API/axios";
import { useEffect } from "react";
import Card from "../Components/Cards/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../css/Search.css";
const Search = () => {
  const params = useParams();
  const [data, setMovies] = useState([]);
  console.log(params);
  // const { data, isLoading, isError, get } = useAPI();
  //   console.log(data);

  // useEffect(() => {
  //   fetch;
  //   get(`/ott/show?search={"title":"${params.query}"}&limit=1`);
  // }, []);

  useEffect(() => {
    async function fetcData() {
      try {
        const request = await axios.get(
          `/ott/show?search={"title":"${params.query}"}&limit=10`
        );
        setMovies(request?.data?.data);
        // console.log(request);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetcData();
  }, [params]);

  return (
    <div className="searchResultsWrapper">
      <h3 className="searchHeading">MORE RESULT</h3>
      <div className="searchCardsContainer">
        {data?.map((show) => (
          <Card className="search_card" {...show} key={show._id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
