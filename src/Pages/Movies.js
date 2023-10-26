import axios from "axios";
import React from "react";

const Movies = () => {
  async function fetcData() {
    try {
      const request = await axios.get();
    } catch (error) {
      console.log(error);
    }
  }
  return <div></div>;
};

export default Movies;
