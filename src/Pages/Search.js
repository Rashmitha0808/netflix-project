import React from "react";
import axios from "../API/axios";
import { useEffect } from "react";
import Card from "../Components/Cards/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../css/Search.css";
const Search = () => {
  const params = useParams();
  const [data, setData] = useState([]);
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
          `/ott/show?search={"title":"${params.query}"}&limit=20`
        );
        setData(request?.data?.data);
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
      <h3 className="searchHeading">
        {data.length === 0
          ? `No results found for ' ${params.query} '`
          : `Results for ' ${params.query} '`}
      </h3>
      <div className="searchCardsContainer">
        {data?.map((show) => (
          <Card className="search_card" {...show} key={show._id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
